import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { IAuthState, authReducer } from '../auth/store/reducers/auth.reducer';
import { environment } from '../../environments/environment';
import { ITodoState, todoReducer } from '../todo/store/reducers/todo.reducer';
import { IRandomImageState, randomImageReducer } from '../random-image/store/random-image.reducer';
import { IPostsState, postsReducer } from '../posts/store/posts.reducer';

export interface AppState {
  authState: IAuthState;
  todoState: ITodoState;
  randomImageState: IRandomImageState;
  postsState: IPostsState;
}

export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer,
  todoState: todoReducer,
  randomImageState: randomImageReducer,
  postsState: postsReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
