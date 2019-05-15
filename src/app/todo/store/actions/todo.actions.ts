import { Action } from '@ngrx/store';
import { ITodo } from '../../todo.models';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  LoadTodosFailure = '[Todo] Load Todos',
  LoadTodosSuccess = '[Todo] Load Todos',
  AddTodo = '[Todo] Add Todo'
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;

  constructor(public payload: { user: string}) {}
}

export class LoadTodosSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodosSuccess;

  constructor(public payload: { todos: ITodo[]}) {}
}

export class LoadTodosFailure implements Action {
  readonly type = TodoActionTypes.LoadTodosSuccess;

  constructor(public payload: { error: any }) {}
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;

  constructor(public payload: { todo: ITodo }) {}
}

export type TodoActions = LoadTodos
  | LoadTodosSuccess
  | LoadTodosFailure
  | AddTodo;
