import { RouterReducerState } from '@ngrx/router-store';
import { IProductState, initialProductState } from './products.state';
import { IUserState, initialUserState } from './user.state';

export interface IAppState {
    router?: RouterReducerState;
    products: IProductState,
    user: IUserState
};

export const initialAppState: IAppState = {
    products: initialProductState,
    user: initialUserState
};

export function getInitialState(): IAppState {
    return initialAppState;
}

