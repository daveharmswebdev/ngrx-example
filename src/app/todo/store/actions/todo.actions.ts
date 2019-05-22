import { Action } from '@ngrx/store';
import { ITodo } from '../../todo.models';
import { Update } from '@ngrx/entity';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  LoadTodosSuccess = '[Todo] Load Todos Success',
  LoadTodosFailure = '[Todo] Load Todos Failure',
  AddTodo = '[Todo] Add Todo',
  UpdateTodo = '[Todo Home] Update Todo',
  UpdateTodoSuccess = '[Todo Home] Update Todo Success',
  UpdateTodoError = '[Todo Home] Update Todo Error',
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;

  constructor(public payload?: any) {}
}

export class LoadTodosSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodosSuccess;

  constructor(public payload: { todos: ITodo[]}) {}
}

export class LoadTodosFailure implements Action {
  readonly type = TodoActionTypes.LoadTodosFailure;

  constructor(public payload: { error: any }) {}
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;

  constructor(public payload: { todo: ITodo }) {}
}

export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UpdateTodo;

  constructor(public payload: Update<ITodo>) {}
}

export class UpdateTodoSuccess implements Action {
  readonly type = TodoActionTypes.UpdateTodoSuccess;

  constructor(public payload: Update<ITodo>) {}
}

export class UpdateTodoError implements Action {
  readonly type = TodoActionTypes.UpdateTodoError;

  constructor(public payload: Update<ITodo>) {}
}

export type TodoActions = LoadTodos
  | LoadTodosSuccess
  | LoadTodosFailure
  | AddTodo
  | UpdateTodo
  | UpdateTodoSuccess
  | UpdateTodoError;
