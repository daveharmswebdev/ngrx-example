import { Action } from '@ngrx/store';
import { ITodo } from '../../todo.models';
import { Update } from '@ngrx/entity';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  LoadTodosSuccess = '[Todo] Load Todos Success',
  LoadTodosFailure = '[Todo] Load Todos Failure',
  AddTodo = '[Todo] Add Todo',
  AddTodoSuccess = '[Todo] Add Todo Success',
  AddTodoFailure = '[Todo] Add Todo Failure',
  DeleteTodo = '[Todo] Delete Todo',
  DeleteTodoSuccess = '[Todo] Delete Todo Success',
  DeleteTodoFailure = '[Todo] Delete Todo Failure',
  UpdateTodo = '[Todo Home] Update Todo',
  UpdateTodoSuccess = '[Todo Home] Update Todo Success',
  UpdateTodoFailure = '[Todo Home] Update Todo Failure'
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;

  constructor(public payload?: any) {}
}

export class LoadTodosSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodosSuccess;

  constructor(public payload: { todos: ITodo[] }) {}
}

export class LoadTodosFailure implements Action {
  readonly type = TodoActionTypes.LoadTodosFailure;

  constructor(public payload: { error: any }) {}
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;

  constructor(public payload: { todo: ITodo }) {}
}

export class AddTodoSuccess implements Action {
  readonly type = TodoActionTypes.AddTodoSuccess;

  constructor(public payload: { todo: ITodo }) {}
}

export class AddTodoFailure implements Action {
  readonly type = TodoActionTypes.AddTodoFailure;

  constructor(public payload: { error: any }) {}
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DeleteTodo;

  constructor(public payload: { id: string }) {}
}

export class DeleteTodoSuccess implements Action {
  readonly type = TodoActionTypes.DeleteTodoSuccess;

  constructor(public payload: { id: string }) {}
}

export class DeleteTodoFailure implements Action {
  readonly type = TodoActionTypes.DeleteTodoFailure;

  constructor(public payload: { error: any }) {}
}


export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UpdateTodo;

  constructor(public payload: Update<ITodo>) {}
}

export class UpdateTodoSuccess implements Action {
  readonly type = TodoActionTypes.UpdateTodoSuccess;

  constructor(public payload: Update<ITodo>) {}
}

export class UpdateTodoFailure implements Action {
  readonly type = TodoActionTypes.UpdateTodoFailure;

  constructor(public payload: { error: any }) {}
}

export type TodoActions =
  | LoadTodos
  | LoadTodosSuccess
  | LoadTodosFailure
  | AddTodo
  | AddTodoSuccess
  | AddTodoFailure
  | DeleteTodo
  | DeleteTodoSuccess
  | DeleteTodoFailure
  | UpdateTodo
  | UpdateTodoSuccess
  | UpdateTodoFailure;
