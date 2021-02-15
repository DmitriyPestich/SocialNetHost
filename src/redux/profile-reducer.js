import {profileAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
    post: [
        {id: 1, message: 'Hello', CountLike: 12},
        {id: 2, message: 'Hello, how are you', CountLike: 5},
        {id: 3, message: 'I`m ok', CountLike: 16}
    ],
    profile: null,
    curentUserId: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                post: [...state.post, {id: 4, message: action.message, CountLike: 0}],
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                post: state.post.filter(p => p.id != action.id),
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};

export const addPost = (message) => ({type : ADD_POST, message});
export const deletePost = (id) => ({type : DELETE_POST, id});
export const setUserProfile = (userdata) =>
    ({type: SET_USER_PROFILE, profile: userdata});
export const setProfileStatus = (status) =>
    ({type: SET_PROFILE_STATUS, status});



export const getUserProfile = (userId) => async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId);
        dispatch(setUserProfile(response.data));
};

export const getProfileStatus = (userId) => async (dispatch) => {
        let response = await profileAPI.getProfileStatus(userId);
        dispatch(setProfileStatus(response.data));

};
export const updateProfileStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateProfileStatus(status);
    if (response.resultCode === 0){
        dispatch(setProfileStatus(status));
    }
};


export default profileReducer;
