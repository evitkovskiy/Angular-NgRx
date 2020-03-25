import { Component, OnInit, ChangeDetectorRef, OnChanges, AfterViewInit } from '@angular/core';

import {Store, select} from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectedUser } from 'src/app/store/selectors/user.selector';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  public user$: Observable<any>;

  constructor(
    private _store: Store<IAppState>,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    //Временный костыль
    setTimeout(() => this.user$ = this._store.pipe(select(selectedUser)), 500);
    this.cdRef.markForCheck();
  }

  // get user$() {
  //   return this._store.pipe(select(selectedUser));
  // } 

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth']);
  }
}
