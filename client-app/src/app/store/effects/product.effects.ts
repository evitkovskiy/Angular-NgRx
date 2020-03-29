import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
    GetProduct, GetProductSuccess, GetProducts, GetProductsSuccess, EProductActions
} from '../actions/products.action'
import { AuthService } from '../../core/services/auth.service';
import { ProductsService } from '../../core/services/products.service'
import { IProduct } from '../state/products.state';
import { selectedProductList } from '../selectors/product.selector'

@Injectable()
export class ProductEffects {
    @Effect()
    getProduct$ = this.action$.pipe(
        ofType<GetProduct>(EProductActions.GetProduct),
        map(action => action.payload),
        switchMap((idProduct) => this.productsService.getProduct(idProduct)),
        switchMap((productHttp: IProduct) => 
        of(new GetProductSuccess(productHttp)))
    );

    @Effect()
    getProducts = this.action$.pipe(
        ofType<GetProducts>(EProductActions.GetProducts),
        switchMap((data) => {
            return this.productsService.getProducts(data.payload, data.params)
        }),
        switchMap((productHttp: {data: IProduct[], limit: number}) => 
        of(new GetProductsSuccess(productHttp.data, productHttp.limit)))
    )


    constructor(
        private authService: AuthService,
        private action$: Actions,
        private store: Store<IAppState>,
        private productsService: ProductsService
    ) {}
}