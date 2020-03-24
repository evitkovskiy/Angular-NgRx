import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { productsReducers } from './products.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    products: productsReducers
}