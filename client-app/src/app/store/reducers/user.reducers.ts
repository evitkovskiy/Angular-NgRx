import { EUserActions } from '../actions/user.action';
import { UserActions } from '../actions/user.action';

import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = (
    state = initialUserState,
    action: UserActions
): IUserState => {
    switch(action.type) {
        case EUserActions.GetUser: {
            return {
                ...state,
                user: action.payload
            };
        }
        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                user: action.payload
            };
        }
        default: 
        return state;
    }

}