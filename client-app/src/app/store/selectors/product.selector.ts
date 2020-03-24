import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IProductState } from '../state/products.state';

const selectProducts = (state: IAppState) => state.products;

export const selectedProductList = createSelector(
    selectProducts,
    (state: IProductState) => state.products
)

export const selectSelectedProduct = createSelector(
    selectProducts,
    (state: IProductState) => state.selectedProduct
)