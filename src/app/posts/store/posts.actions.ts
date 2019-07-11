import { Action } from '@ngrx/store';
import { IPosts } from './posts.reducer';

export enum PostsActionsTypes {
  LoadConfig = '[Posts Component] Load Config',
  LoadConfigSuccess = '[Posts Component] Load Config Success',
  LoadConfigFailure = '[Posts Component] Load Config Failure'
}

export class LoadConfig implements Action {
  readonly type = PostsActionsTypes.LoadConfig;

  constructor(public payload?: any) {}
}

export class LoadConfigSuccess implements Action {
  readonly type = PostsActionsTypes.LoadConfigSuccess;

  constructor(public payload: IPosts[]) {}
}

export class LoadConfigFailure implements Action {
  readonly type = PostsActionsTypes.LoadConfigFailure;

  constructor(public payload: any) {}
}

export type PostsActions = LoadConfig | LoadConfigSuccess | LoadConfigFailure;
