import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


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

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;      // observer
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        
        this._callSubscriber(this._state)
    }
}


window.store = store;



export default store;