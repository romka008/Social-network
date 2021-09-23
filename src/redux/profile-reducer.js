import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    posts: [
        { id: 1, messages: 'What is it?', likesCount: '100' },
        { id: 2, messages: 'Where are u?', likesCount: '5634' },
        { id: 3, messages: 'What are you doing?', likesCount: '794' },
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 4,
                    messages: action.newPostText,
                    likesCount: 0,
                };
                let stateCopy = {...state }
                stateCopy.posts = [...state.posts]
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = ('');
                return stateCopy;
            }
        case SET_USER_PROFILE:
            {
                return {...state, profile: action.profile }
            }
        case SET_STATUS:
            {
                return {...state, status: action.status }
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })


export const getUserProfile = (userID) => {
    return (dispatch) => {
        usersAPI.getProfile(userID).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID).then(data => {
            dispatch(setStatus(data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}


export default profileReducer