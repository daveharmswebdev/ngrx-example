import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectUniqueName } from '../auth/store/auth.selectors';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { LogOut } from '../auth/store/actions/auth.actions';
import { selectTotalTodos } from '../todo/store/todo.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public uniqueName$: Observable<string>;
  public todoTotal$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.uniqueName$ = this.store.pipe(select(selectUniqueName));
    this.todoTotal$ = this.store.pipe(select(selectTotalTodos));
  }

  logout() {
    this.store.dispatch(new LogOut());
  }

}
