import { Component, OnInit } from '@angular/core';
import { AppState } from '../../reducers';
import { Store, select } from '@ngrx/store';
import { LoadTodos, UpdateTodo, DeleteTodo } from '../store/actions/todo.actions';
import { Observable } from 'rxjs';
import { ITodo } from '../todo.models';
import { selectTodos } from '../store/todo.selectors';
import { CustomDialogService } from '../../../app/shared/custom-dialog.service';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {
  public todos$: Observable<ITodo[]>;

  constructor(
    private store: Store<AppState>,
    private dialogService: CustomDialogService
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadTodos());

    this.todos$ = this.store.pipe(select(selectTodos));
  }

  toggleComplete({id, complete}: ITodo) {
    this.store.dispatch(new UpdateTodo({ id, changes: { complete: !complete}}));
  }

  editTodo(todo) {
    this.dialogService.editTodo(todo).subscribe(
      (result: ITodo) => this.store.dispatch(new UpdateTodo({
        id: result.id,
        changes: result
      })),
    );
  }

  deleteTodo(todo) {
    console.log('component', todo, todo.id);
    this.store.dispatch(new DeleteTodo({ id: todo.id }));
  }
}
