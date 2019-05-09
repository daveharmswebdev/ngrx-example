import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AuthState, authReducer } from '../auth/store/reducers/auth.reducer';
import { environment } from '../../environments/environment';
import { ITodoState, todoReducer } from '../todo/store/reducers/todo.reducer';

export interface State {
  authState: AuthState;
  todoState: ITodoState;
}

export const reducers: ActionReducerMap<State> = {
  authState: authReducer,
  todoState: todoReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
