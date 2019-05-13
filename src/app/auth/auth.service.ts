import { Injectable } from '@angular/core';
import { of, Observable, timer } from 'rxjs';
import { IAuth } from './store/auth.models';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, password: string): Observable<IAuth> {

    return timer(2000).pipe(
      switchMap(() => {
        return of({
          token: 'eyJhbGciOiJIU',
          nameid: '1',
          unique_name: 'morse',
        });
      })
    );
  }

}
