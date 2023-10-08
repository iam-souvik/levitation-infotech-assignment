import { TFormUserInitialState } from '../constents.ts';
import * as usersTypes from './users.types.ts';



const initialState: TFormUserInitialState = {
    users: [],
    loading: false,
    error: false
};

const Reducer = (
    state: TFormUserInitialState = initialState,
    action: {
        type: string;
        payload?: any;
    }
): TFormUserInitialState => {
    switch (action.type) {
        case usersTypes.GET_USERS: {
            return {
                loading: false,
                error: false,
                users: action.payload,
            };
        }

        case usersTypes.USERS_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            };
        }

        case usersTypes.USERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            };
        }

        case usersTypes.POST_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false
            };
        }

        default:
            return state;
    }
};

export default Reducer;
