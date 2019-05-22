import { Component, OnInit } from '@angular/core';
import { AppState } from '../../reducers';
import { Store, select } from '@ngrx/store';
import { LoadTodos } from '../store/actions/todo.actions';
import { Observable } from 'rxjs';
import { ITodo } from '../todo.models';
import { selectTodos } from '../store/todo.selectors';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {
  public todos$: Observable<ITodo[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadTodos());

    this.todos$ = this.store.pipe(select(selectTodos));
  }

}
