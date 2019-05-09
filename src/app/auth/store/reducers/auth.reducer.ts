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
    default:
      return state;
  }
}
