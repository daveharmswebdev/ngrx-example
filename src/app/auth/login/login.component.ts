import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppState } from '../../../app/reducers';
import { Store, select } from '@ngrx/store';
import { LoginAttempt } from '../store/actions/auth.actions';
import { selectLoggedIn, selectAttemptingLogin } from '../store/auth.selectors';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public attemptingLogin$: Observable<boolean>;
  public loggedIn$: Subscription;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.attemptingLogin$ = this.store.pipe(select(selectAttemptingLogin));
    this.loggedIn$ = this.store.pipe(select(selectLoggedIn)).subscribe(
      loggedIn => {
        if (loggedIn) {
          this.loginForm.reset();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.loggedIn$.unsubscribe();
  }

  login() {
    this.store.dispatch(new LoginAttempt({
      UserName: this.loginForm.get('username').value,
      Password: this.loginForm.get('password').value
    }));
  }

}
