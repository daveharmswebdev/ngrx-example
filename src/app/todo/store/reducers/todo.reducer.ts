import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { v4 as uuid } from 'uuid';
import { TodoActions, TodoActionTypes } from '../actions/todo.actions';
import { ITodo } from '../../todo.models';

export interface ITodoState extends EntityState<ITodo> {}

export const todoAdapter: EntityAdapter<ITodo> = createEntityAdapter();

export const initialTodoState: ITodoState = todoAdapter.getInitialState();

export function todoReducer(state = initialTodoState, action: TodoActions): ITodoState {
  switch (action.type) {
    case TodoActionTypes.AddTodo: {
      const todo = {
        ...action.payload.todo,
        id: uuid()
      };
      return todoAdapter.addOne(todo, state);
    }

    case TodoActionTypes.LoadTodos:
      return state;

    default:
      return state;
  }
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = todoAdapter.getSelectors();

export const getAllTodos = selectAll;
