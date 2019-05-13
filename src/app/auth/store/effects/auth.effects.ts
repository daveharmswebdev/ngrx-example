import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, switchMap, map, catchError } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';
import { AuthActionTypes, AuthActions, LoginAttempt, LoginSuccess, LoginFailure } from '../actions/auth.actions';
import { Action } from '@ngrx/store';
import { AuthService } from '../../auth.service';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions<AuthActions>,
    private authService: AuthService
  ) {}

  @Effect()
  loginAttempt$: Observable<Action> = this.actions$.pipe(
    ofType<LoginAttempt>(AuthActionTypes.LoginAttempt),
    switchMap(action => {
      return this.authService
        .login(action.payload.UserName, action.payload.Password)
        .pipe(
          map(token => new LoginSuccess(token)),
          catchError(error => of(new LoginFailure(error)))
        );
    })
  );

}
