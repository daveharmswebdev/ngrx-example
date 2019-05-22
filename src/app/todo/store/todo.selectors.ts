import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../../app/reducers';
import * as fromTodo from './reducers/todo.reducer';

export const selectTodoState = createFeatureSelector<AppState, fromTodo.ITodoState>('todoState');

export const selectTodos = createSelector(
  selectTodoState,
  fromTodo.getAllTodos
);
