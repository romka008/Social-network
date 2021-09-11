const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
    posts: [
        { id: 1, messages: 'What is it?', likesCount: '100' },
        { id: 2, messages: 'Where are u?', likesCount: '5634' },
        { id: 3, messages: 'What are you doing?', likesCount: '794' },
    ],
    newPostText: 'Hi!',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 4,
                    messages: state.newPostText,
                    likesCount: 0,
                };
                let stateCopy = {...state }
                stateCopy.posts = [...state.posts]
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = ('');
                return stateCopy;
            }
        case UPDATE_NEW_POST_TEXT:
            {
                let stateCopy = {...state }
                stateCopy.newPostText = action.newText;
                return stateCopy;
            }
        case SET_USER_PROFILE:
            {
                return {...state, profile: action.profile }
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer