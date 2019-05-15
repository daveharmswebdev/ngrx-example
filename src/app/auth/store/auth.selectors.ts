import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import * as fromAuth from './reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AppState, fromAuth.IAuthState>('authState');

export const selectUniqueName = createSelector(
  selectAuthState,
  fromAuth.getUniqueName
);

export const selectLoggedIn = createSelector(
  selectAuthState,
  fromAuth.getLoggedIn
);

export const selectNameId = createSelector(
  selectAuthState,
  fromAuth.getNameId
);

export const selectAttemptingLogin = createSelector(
  selectAuthState,
  fromAuth.getAttemptingLogin
);

export const selectToken = createSelector(
  selectAuthState,
  fromAuth.getToken
);
