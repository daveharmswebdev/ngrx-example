import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  TodoActionTypes,
  TodoActions,
  LoadTodos,
  LoadTodosSuccess,
  LoadTodosFailure,
  UpdateTodo,
  UpdateTodoSuccess,
  UpdateTodoFailure,
  AddTodo,
  AddTodoSuccess,
  DeleteTodo,
  DeleteTodoSuccess,
  DeleteTodoFailure
} from '../actions/todo.actions';
import { TodoService } from '../../todo.service';
import { AppState } from '../../../../app/reducers';
import { Store, select } from '@ngrx/store';
import { selectNameId, selectUniqueName } from '../../../../app/auth/store/auth.selectors';
import { ITodo } from '../../todo.models';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions<TodoActions>,
    private todoService: TodoService,
    private store: Store<AppState>
  ) {}

  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType<LoadTodos>(TodoActionTypes.LoadTodos),
    withLatestFrom(this.store.pipe(select(selectNameId))),
    switchMap(([_, nameId]) =>
      this.todoService.getTodos(nameId).pipe(
        map(todos => new LoadTodosSuccess({ todos })),
        catchError(error => of(new LoadTodosFailure(error)))
      )
    )
  );

  @Effect()
  updateTodo$ = this.actions$.pipe(
    ofType<UpdateTodo>(TodoActionTypes.UpdateTodo),
    switchMap(action =>
      this.todoService.updateTodo(action.payload).pipe(
        map(
          (todo: ITodo) => new UpdateTodoSuccess({ id: todo.id, changes: todo })
        ),
        catchError(error => of(new UpdateTodoFailure(error)))
      )
    )
  );

  @Effect()
  addTodo$ = this.actions$.pipe(
    ofType<AddTodo>(TodoActionTypes.AddTodo),
    withLatestFrom(this.store.pipe(select(selectUniqueName))),
    switchMap(([action, name]) => {
      const todoToAdd: ITodo = {
        ...action.payload.todo,
        owner: name
      };
      return this.todoService.addTodo(todoToAdd).pipe(
        map(addition => new AddTodoSuccess({ todo: addition.payload })),
        catchError(error => of(new UpdateTodoFailure(error)))
      );
    }
    )
  );

  @Effect()
  deleteTodo$ = this.actions$.pipe(
    ofType<DeleteTodo>(TodoActionTypes.DeleteTodo),
    switchMap(action =>
      this.todoService.removeTodo(action.payload.id).pipe(
        map(result => new DeleteTodoSuccess({ id: result.payload })),
        catchError(error => of(new DeleteTodoFailure(error)))
      )
    )
  );
}
