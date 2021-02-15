import {usersAPI} from "../API/api";

const SUBSCRIBE = 'SUBSCRIBE';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const FOLLOWING_PROCCESS = 'FOLLOWING_PROCCESS';

let initialState = {
    users: [],
    currentPage: 1,
    amountUsersOnPage: 5,
    totalCount: 20,
    isFetching: false,
    followingProccess: [],
    fake: 1
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: action.subscribe}
                    }
                    return u;
                })
            };
        }
        case "FAKE": {
            return {
                ...state,
                fake: state.fake
            };
        }
/*        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }*/
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case CHANGE_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case FOLLOWING_PROCCESS: {
            return {
                ...state,
                followingProccess: action.isFollowing
                    ? [...state.followingProccess, action.userId]
                    : state.followingProccess.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }

};


export const subscribeSuccses = (userId, subscribe) =>
    ({type: SUBSCRIBE, userId, subscribe});
export const setUsers = (users) =>
    ({type: SET_USERS, users: users});
export const changePage = (currentPage) =>
    ({type: CHANGE_PAGE, currentPage: currentPage});
export const setTotalCount = (count) =>
    ({type: SET_TOTAL_COUNT, totalCount: count});
export const setIsFetching = (isFetching) =>
    ({type: IS_FETCHING, isFetching});
export const setFollowingProccess = (isFollowing, userId) =>
    ({type: FOLLOWING_PROCCESS, isFollowing, userId});


export const uploadUsers = (currentPage, amountUsersOnPage) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(changePage(currentPage));
        let response = await usersAPI.uploadUsers(currentPage, amountUsersOnPage);
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount));
            dispatch(setIsFetching(false));
    }
};

export const followUnfollowFlow = (dispatch, requestMethod, subscribe, userId) => {
    return async (dispatch) => {
        dispatch(setFollowingProccess(true, userId));
        let response = await requestMethod(userId);
            if (response.resultCode === 0) {
                dispatch(subscribeSuccses(userId, subscribe))
            }
            dispatch(setFollowingProccess(false, userId));
    }
};

export const unfollow = (userId) => (dispatch) => {
    dispatch(followUnfollowFlow(dispatch, usersAPI.unfollow.bind(usersAPI), false, userId));
};
export const follow = (userId) => (dispatch) => {
    dispatch(followUnfollowFlow(dispatch, usersAPI.follow.bind(usersAPI), true, userId));
};

export default usersReducer;
