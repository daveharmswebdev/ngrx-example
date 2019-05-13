import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface IAuthState {
  attemptingLogin: boolean;
  token: string;
  nameid: string;
  unique_name: string;
  loggedIn: boolean;
}

export const initialAuthState: IAuthState = {
  attemptingLogin: false,
  token: '',
  nameid: '',
  unique_name: '',
  loggedIn: false
};

export function authReducer(
  state = initialAuthState,
  action: AuthActions
): IAuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAttempt: {
      return {
        ...state,
        attemptingLogin: true
      };
    }
    case AuthActionTypes.LoginSuccess: {
      return {
        attemptingLogin: false,
        token: action.payload.token,
        nameid: action.payload.nameid,
        unique_name: action.payload.unique_name,
        loggedIn: true
      };
    }
    case AuthActionTypes.LoginFailure: {
      return {
        ...state,
        attemptingLogin: false
      };
    }
    case AuthActionTypes.LogOut: {
      return initialAuthState;
    }
    default:
      return state;
  }
}

export const getAttemptingLogin = (state: IAuthState) => state.attemptingLogin;
export const getToken = (state: IAuthState) => state.token;
export const getNameId = (state: IAuthState) => state.nameid;
export const getUniqueName = (state: IAuthState) => state.unique_name;
export const getLoggedIn = (state: IAuthState) => state.loggedIn;
