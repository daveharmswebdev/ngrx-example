import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { TodoActions, TodoActionTypes } from '../actions/todo.actions';
import { ITodo } from '../../todo.models';

export interface ITodoState extends EntityState<ITodo> {}

export const todoAdapter: EntityAdapter<ITodo> = createEntityAdapter();

export const initialTodoState: ITodoState = todoAdapter.getInitialState();

export function todoReducer(state = initialTodoState, action: TodoActions): ITodoState {
  switch (action.type) {
    case TodoActionTypes.LoadTodosSuccess: {
      return todoAdapter.addAll(action.payload.todos, state);
    }
    case TodoActionTypes.UpdateTodoSuccess: {
      return todoAdapter.updateOne(action.payload, state);
    }
    case TodoActionTypes.AddTodoSuccess: {
      return todoAdapter.addOne(action.payload.todo, state);
    }
    case TodoActionTypes.DeleteTodo: {
      return todoAdapter.removeOne(action.payload.id, state);
    }
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
export const getTotal = selectTotal;
