import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IAuth } from './store/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, password: string): Observable<IAuth> {

    return of(
      {
        // tslint:disable-next-line:max-line-length
        token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJtb3JzZSIsIm5iZiI6MTU1Nzc2ODU1MSwiZXhwIjoxNTU3ODU0OTUxLCJpYXQiOjE1NTc3Njg1NTF9.SXEY0Utj2ZJ-g3wa9XxF1e3IvIBCHzC57Z_9kWt2_2aKlSkn1avYkR3jJyVeXsEccwZdGGbSL3zN_v-qtfHwIw',
        nameid: '1',
        unique_name: 'morse',
      }
    );

  }
}
