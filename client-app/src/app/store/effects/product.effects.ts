import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
    GetProduct, GetProductSuccess, GetProducts, GetProductsSuccess, EProductActions
} from '../actions/products.action'
import { AuthService } from '../../core/services/auth.service';
import { IProduct } from '../state/products.state';
import {selectedProductList, selectSelectedProduct} from '../selectors/product.selector'

@Injectable()
export class ProductEffects {
    @Effect()
    getProduct$ = this.action$.pipe(
        ofType<GetProduct>(EProductActions.GetProduct),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectedProductList))),
        switchMap(([id, products]) => {
            const selectedProduct = products.filter(user => user._id.$oid === id)[0];
            return of(new GetProductSuccess(selectedProduct))
        })
    );

    @Effect()
    getProducts = this.action$.pipe(
        ofType<GetProducts>(EProductActions.GetProducts),
        switchMap(() => this.authService.getShops()),
        switchMap((productHttp: IProduct[]) => 
        of(new GetProductsSuccess(productHttp)))
    )


    constructor(
        private authService: AuthService,
        private action$: Actions,
        private store: Store<IAppState>
    ) {}
}