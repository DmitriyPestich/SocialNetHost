import * as axios from "axios";

const instance = axios.create ({
    withCredentials : true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7502e7c7-e7e1-4cad-a682-eb1547e7366d"
    }

});

export const usersAPI = {
    uploadUsers(currentPage = 1, amountUsersOnPage = 5){
        return instance.get(`users?page=${currentPage}&count=${amountUsersOnPage}`)
            .then( response => {
                return response.data;
            })
    },
    follow(userId = 1){
        return instance.post(`follow/${userId}`)
            .then( response => {
                return response.data;
            })
    },
    unfollow(userId = 1){
        return instance.delete(`follow/${userId}`)
            .then( response => {
                return response.data;
            })
    }
};

export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status){
        return instance.put(`profile/status/`, {status: status})
            .then( response => {
                return response.data;
            })
    },
};

export const authAPI = {
    Me(){
        return instance.get(`auth/me`)
    },
    login(formData){
        return instance.post(`auth/login`, {...formData})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
};
