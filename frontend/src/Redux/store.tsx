import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux";
import axios from 'axios';
import thunk from "redux-thunk";
import Reducer from "./users/users.reducers";
import AuthReducer from './auth/auth.reducers';

axios.defaults.baseURL = "http://localhost:8080"

declare global {
     interface Window {
          __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
     }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const RootReducers = {
     formUsersManager: Reducer,
     authManager: AuthReducer
}

export const store = legacy_createStore(combineReducers(RootReducers), composeEnhancers(applyMiddleware(thunk)));


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
