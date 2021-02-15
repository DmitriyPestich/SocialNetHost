import {authAPI} from "../API/api";
import React from "react";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_PROCCESSING = 'SET_PROCCESSING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    blocked: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.userData
            }
        }
        case SET_PROCCESSING: {
            return {
                ...state,
                blocked: action.blocked
            }
        }
        default:
            return state;
    }

};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    userData: {userId, email, login, isAuth}
});

export const setProccessing = (blocked) =>
    ({type: SET_PROCCESSING, blocked});


export const chekAuthMe = () => async (dispatch) => {
    let response = await authAPI.Me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (formData) => {
    return async (dispatch) => {
        dispatch(setProccessing(true));
        let response = await authAPI.login(formData);
            if (response.data.resultCode === 0) {
                let response = await authAPI.Me();
                    if (response.data.resultCode === 0) {
                        let {id, email, login} = response.data.data;
                        dispatch(setAuthUserData(id, email, login, true));
                    }
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some ERROR";
                let action = stopSubmit("login", {_error: message});
                dispatch(action);
            }
            dispatch(setProccessing(false));
    }
};
export const logout = () => {
    return async (dispatch) => {
        dispatch(setProccessing(true));
        let response = await authAPI.logout();
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            } else if (response.data.resultCode === 1) {
                console.log(response.data.messages[0])
            }
            dispatch(setProccessing(false));
    }
};

export default authReducer;
