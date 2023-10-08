import { TAuthInitialState } from '../constents.ts';
import * as authTypes from './auth.types.ts';



const initialState: TAuthInitialState = {
    user: {},
    loading: false,
    error: ""
};

const AuthReducer = (
    state: TAuthInitialState = initialState,
    action: {
        type: string;
        payload?: any;
    }
): TAuthInitialState => {
    switch (action.type) {
        case authTypes.AUTH_SUCCESS: {
            return {
                loading: false,
                error: "",
                user: action.payload,
            };
        }

        case authTypes.AUTH_LOADING: {
            return {
                ...state,
                loading: true,
                error: ""
            };
        }

        case authTypes.AUTH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload || ""
            };
        }

        default:
            return state;
    }
};

export default AuthReducer;
