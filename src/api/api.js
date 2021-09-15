import axios from 'axios';




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "93bc148d-964b-405d-98a7-6d943ae47cfc"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => {
                return response.data;
            })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`, {})
            .then(response => {
                return response.data;
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`, {}, {})
            .then(response => {
                return response.data;
            })
    },
    getProfile(userID = 2) {
        return instance.get(`profile/` + userID)
            .then(response => {
                return response.data;
            })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    }

}