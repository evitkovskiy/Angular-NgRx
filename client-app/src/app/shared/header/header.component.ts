import { Component, OnInit, ChangeDetectorRef, OnChanges, AfterViewInit } from '@angular/core';

import {Store, select} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectedUser } from 'src/app/store/selectors/user.selector';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  public user$: Observable<any>;

  constructor(
    private _store: Store<IAppState>,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.user$ = this._store.pipe(delay(0), select(selectedUser));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth']);
  }
}
