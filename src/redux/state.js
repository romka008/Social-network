import { rerenderEntireTree } from '../render'

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
            { messages: 'What is it?' },
            { messages: 'Where are u?' },
            { messages: 'Yo' },
        ]
    },
    profilePage: {
        posts: [
            { id: 1, messages: 'What is it?', likesCount: '100' },
            { id: 2, messages: 'Where are u?', likesCount: '5634' },
            { id: 3, messages: 'What are you doing?', likesCount: '794' },
        ]
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        messages: postMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state