import { Action } from '@ngrx/store';
import { ILoginCredential } from '../auth.models';

export enum AuthActionTypes {
  LoginAttempt = '[Login Component] Login',
  LoginSuccess = '[Login Effects] Login Success',
  LoginFailure = '[Login Effects] Login Failure',
  LogOut = '[Navbar] Log Out'
}

export class LoginAttempt implements Action {
  readonly type = AuthActionTypes.LoginAttempt;

  constructor(public payload: ILoginCredential) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { token: string, nameid: string, unique_name: string }) {}
}
export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}
export class LogOut implements Action {
  readonly type = AuthActionTypes.LogOut;

  constructor(public payload?: any) {}
}

export type AuthActions = LoginAttempt
  | LoginSuccess
  | LoginFailure
  | LogOut;
