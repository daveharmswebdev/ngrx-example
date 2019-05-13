import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { IAuthState, authReducer } from '../auth/store/reducers/auth.reducer';
import { environment } from '../../environments/environment';
import { ITodoState, todoReducer } from '../todo/store/reducers/todo.reducer';

export interface AppState {
  authState: IAuthState;
  todoState: ITodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer,
  todoState: todoReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
