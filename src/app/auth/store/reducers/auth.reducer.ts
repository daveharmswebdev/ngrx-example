import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface AuthState {
  attemptingLogin: boolean;
  token: string;
  nameid: string;
  unique_name: string;
  loggedIn: boolean;
}

export const initialAuthState: AuthState = {
  attemptingLogin: false,
  token: '',
  nameid: '',
  unique_name: '',
  loggedIn: false
};

export function authReducer(
  state = initialAuthState,
  action: AuthActions
): AuthState {
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
