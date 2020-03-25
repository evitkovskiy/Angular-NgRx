import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';


import { selectedUser } from 'src/app/store/selectors/user.selector';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user$ = this._store.pipe(select(selectedUser));

  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
    this.user$.subscribe(data => console.log(data))
  }

}
