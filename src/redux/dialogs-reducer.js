const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                messages: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = ('');
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageText = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer