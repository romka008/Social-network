let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {

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
        newPostText: '',
    },
}
window.state=state;


export const addPost = () => {
    let newPost = {
        id: 4,
        messages: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ('')
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export const addMessage = () => {
    let newMessage = {
        id: 4,
        messages: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ('')
    rerenderEntireTree(state)
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state)
}


export let subscribe = (observer) => {
    rerenderEntireTree = observer;      // observer
}



export default state;