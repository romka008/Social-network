const ADD_MESSAGE = 'ADD-MESSAGE'


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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            {
                let stateCopy = {
                    ...state,
                    messages: [...state.messages]
                }
                let newMessage = {
                    id: 4,
                    messages: action.newMessageText,
                };
                stateCopy.messages.push(newMessage);
                return stateCopy;
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default dialogsReducer