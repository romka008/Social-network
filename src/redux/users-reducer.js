import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            {
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: true }
                        }
                        return u;
                    })
                }
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            {
                // let stateCopy = {...state }
                // stateCopy.users = [...action.users];
                // return stateCopy;
                return {...state, users: action.users }
            }
        case SET_CURRENT_PAGE:
            {
                return {...state, currentPage: action.currentPage }
            }
        case SET_USERS_TOTAL_COUNT:
            {
                return {...state, totalUsersCount: action.count }
            }
        case TOGGLE_IS_FETCHING:
            {
                return {...state, isFetching: action.isFetching }
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            {
                return {
                    ...state,
                    followingInProgress: action.isFetching ? [...state.followingInProgress, action.userID] : state.followingInProgress.filter(id => id !== action.userID)
                }
            }

        default:
            return state;
    }
}
export const followSuccess = (userID) => ({ type: FOLLOW, userID })
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        usersAPI.follow(userID)
            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
            //   withCredentials: true,
            //   headers: {
            //     "API-KEY": "93bc148d-964b-405d-98a7-6d943ae47cfc"
            //   }
            // })
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userID))
                }
                dispatch(toggleFollowingProgress(false, userID))
            })
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        usersAPI.follow(userID)
            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
            //   withCredentials: true,
            //   headers: {
            //     "API-KEY": "93bc148d-964b-405d-98a7-6d943ae47cfc"
            //   }
            // })
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userID))
                }
                dispatch(toggleFollowingProgress(false, userID))
            })
    }
}


export default usersReducer;