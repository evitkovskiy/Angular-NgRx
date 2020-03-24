import { Action } from '@ngrx/store';

import { IProduct } from '../state/products.state';

export enum EProductActions {
    GetProducts = '[Product] Get Products',
    GetProductsSuccess = '[Poduct] Get Products Success',
    GetProduct = '[Product] Get Product',
    GetProductSuccess = '[Product] Get Product Success'
}

export class GetProducts implements Action {
    public readonly type = EProductActions.GetProducts;
}

export class GetProductsSuccess implements Action {
    public readonly type = EProductActions.GetProductsSuccess;
    constructor(public payload: IProduct[]) {}
}

export class GetProduct implements Action {
    public readonly type = EProductActions.GetProduct;
    constructor(public payload: string) {}
}

export class GetProductSuccess implements Action {
    public readonly type = EProductActions.GetProductSuccess;
    constructor(public payload: IProduct) {}
}

export type ProductActions = GetProducts | GetProductsSuccess | GetProduct | GetProductSuccess;