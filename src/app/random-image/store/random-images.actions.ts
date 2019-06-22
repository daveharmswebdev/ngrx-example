import { Action } from '@ngrx/store';
import { IPhoto } from './random-image.reducer';

export enum RandomImageActionsTypes {
  IncreaseSpeed = '[Random Image Component] Increase Speed',
  DecreaseSpeed = '[Random Image Component] Decrease Speed',
  FetchImage = '[Random Image Component] Fetch Image',
  FetchImageSuccess = '[Random Image Effects] Fetch Image Success',
  FetchImageFailure = '[Random Image Effects] Fetch Image Failure',
}

export class IncreaseSpeed implements Action {
  readonly type = RandomImageActionsTypes.IncreaseSpeed;

  constructor(public payload?: any) {}
}

export class DecreaseSpeed implements Action {
  readonly type = RandomImageActionsTypes.DecreaseSpeed;

  constructor(public payload?: any) {}
}

export class FetchImage implements Action {
  readonly type = RandomImageActionsTypes.FetchImage;

  constructor(public payload?: any) {}
}

export class FetchImageSuccess implements Action {
  readonly type = RandomImageActionsTypes.FetchImageSuccess;

  constructor(public payload: IPhoto) {}
}

export class FetchImageFailure implements Action {
  readonly type = RandomImageActionsTypes.FetchImageFailure;

  constructor(public payload: any) {}
}

export type RandomImageActions = IncreaseSpeed
  | DecreaseSpeed
  | FetchImage
  | FetchImageSuccess
  | FetchImageFailure;
