import { EProductActions} from '../actions/products.action';
import { ProductActions } from '../actions/products.action';

import { initialProductState, IProductState } from '../state/products.state';

export const productsReducers = (
    state = initialProductState,
    action: ProductActions
): IProductState => {
    switch(action.type) {
        case EProductActions.GetProductsSuccess: {
            return {
                ...state,
                products: action.payload
            };
        }

        case EProductActions.GetProductSuccess: {
            return {
                ...state,
                selectedProduct: action.payload
            }
        }

        default: 
        return state;
    }

}