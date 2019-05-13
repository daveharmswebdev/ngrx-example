import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectUniqueName } from '../auth/store/auth.selectors';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { LogOut } from '../auth/store/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public uniqueName$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.uniqueName$ = this.store.pipe(select(selectUniqueName));
  }

  logout() {
    this.store.dispatch(new LogOut());
  }

}
