import * as userTypes from './users.types';
import { Dispatch } from 'redux';
import axios from 'axios';
import { IFormUser } from '../constents';

export const getFormUsers = (params: string = "") => async (dispatch: Dispatch) => {
    dispatch({ type: userTypes.USERS_LOADING });

    try {
        const response = await axios.get(`/form?${params}`)
        dispatch({ type: userTypes.GET_USERS, payload: response.data.users });
    } catch (error:any) {
        console.log('error:', error)
        dispatch({ type: userTypes.USERS_ERROR });
        alert(error.response.data.message || "Server Error!")
    }
}

export const postFormUser = (user: IFormUser) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: userTypes.USERS_LOADING });

    try {
        await axios.post("/form/multiform", user)
        dispatch({ type: userTypes.POST_USER_SUCCESS });
        alert('Form submitted successfully!');
    } catch (error: any) {
        console.log('error:', error);
        dispatch({ type: userTypes.USERS_ERROR });
        alert(error.response.data.message || "Server Error!")
    }
}
