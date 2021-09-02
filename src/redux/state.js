const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let store = {
    _state: {

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Sergey' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'John' },
                { id: 4, name: 'Ou Kee' },
                { id: 5, name: 'No mercy' },
                { id: 6, name: 'Kenjoh' },
                { id: 7, name: 'Roman' },
            ],
            messages: [
                { id: 1, messages: 'What is it?' },
                { id: 2, messages: 'Where are u?' },
                { id: 3, messages: 'Yo' },
            ],
            newMessageText: 'Hola',
        },
        profilePage: {
            posts: [
                { id: 1, messages: 'What is it?', likesCount: '100' },
                { id: 2, messages: 'Where are u?', likesCount: '5634' },
                { id: 3, messages: 'What are you doing?', likesCount: '794' },
            ],
            newPostText: 'Hi!',
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getstate() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;      // observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                messages: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ('')
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                messages: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ('')
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageText = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

window.store = store;



export default store;