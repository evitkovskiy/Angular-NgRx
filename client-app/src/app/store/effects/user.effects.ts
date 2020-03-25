import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
    GetUser, GetUserSuccess, EUserActions
} from '../actions/user.action';
import { IUser } from '../state/user.state';
import {selectedUser} from '../selectors/user.selector'

@Injectable()
export class UserEffects {
    @Effect()
    getUser = this.action$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        switchMap(() => this.store.select(selectedUser)),
        map((user: IUser) => new GetUserSuccess(user))
    )


    constructor(
        private action$: Actions,
        private store: Store<IAppState>
    ) {}
}