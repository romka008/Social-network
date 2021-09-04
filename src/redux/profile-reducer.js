const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    posts: [
        { id: 1, messages: 'What is it?', likesCount: '100' },
        { id: 2, messages: 'Where are u?', likesCount: '5634' },
        { id: 3, messages: 'What are you doing?', likesCount: '794' },
    ],
    newPostText: 'Hi!',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                messages: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = ('');
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer