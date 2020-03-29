import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services//user.service'
import { GetUser } from 'src/app/store/actions/user.action';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';

@Injectable({ providedIn: 'root' })
export class UserdataResolver implements Resolve<any> {
  constructor(private userService: UserService, private _store: Store<IAppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    this.userService.getUserData().subscribe((data: any) => {
      this._store.dispatch(new GetUser(data.userData))
    })
    return this.userService.getUserData();
  }
}