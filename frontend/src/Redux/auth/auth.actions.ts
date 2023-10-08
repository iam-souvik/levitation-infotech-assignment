import { Dispatch } from 'redux';
import * as authTypes from './auth.types';
import axios from 'axios';
import { IUser } from '../constents';

export const userLogin = ({ email, password }: { email: string, password: string }, navigate: Function) => async (dispatch: Dispatch) => {
    if (!email || !password) return;
    dispatch({ type: authTypes.AUTH_LOADING })
    try {
        const res = await axios.post('/auth/login', {
            email, password
        });
        dispatch({ type: authTypes.AUTH_SUCCESS, payload: res.data?.user });
        alert(res.data.message || "Register successful");
        navigate("/multiform");
    } catch (error: any) {
        console.log('error:', error);
        dispatch({ type: authTypes.AUTH_ERROR, payload: error.response.data.message || "Server error"  });
    }
}


export const userRegister = (user: IUser, navigate:Function) => async (dispatch: Dispatch) => {
    if (!user.name || !user.email || !user.password) return;
    dispatch({ type: authTypes.AUTH_LOADING })
    try {
        const res = await axios.post('/auth/register', user);
        dispatch({ type: authTypes.AUTH_SUCCESS, payload: {} })
        alert(res.data.message || "Register successful");
        navigate("/login");
    } catch (error: any) {
        console.log('error:', error);
        dispatch({ type: authTypes.AUTH_ERROR });
        alert(error.response.data.message || "Server error");
    }
}