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
  UpdateTodoError
} from '../actions/todo.actions';
import { TodoService } from '../../todo.service';
import { AppState } from '../../../../app/reducers';
import { Store, select } from '@ngrx/store';
import { selectNameId } from '../../../../app/auth/store/auth.selectors';
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
    switchMap(update =>
      this.todoService.updateTodo(update.payload).pipe(
        map(
          (todo: ITodo) => new UpdateTodoSuccess({ id: todo.id, changes: todo })
        ),
        catchError(error => of(new UpdateTodoError(error)))
      )
    )
  );
}
