import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'



let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            {
                return {
                    ...state,
                    ...action.payload
                }
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userID, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userID, email, login, isAuth } })
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer;