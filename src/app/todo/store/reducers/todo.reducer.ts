import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import { TodoActions, TodoActionTypes } from '../actions/todo.actions';

export interface ITodo {
  id: string;
  description: string;
  owner: string;
  complete: boolean;
}

export interface ITodoState extends EntityState<ITodo> {}

export const todoAdapter: EntityAdapter<ITodo> = createEntityAdapter();

export const initialTodoState: ITodoState = todoAdapter.getInitialState();

export function todoReducer(state = initialTodoState, action: TodoActions): ITodoState {
  switch (action.type) {

    case TodoActionTypes.LoadTodos:
      return state;

    default:
      return state;
  }
}
