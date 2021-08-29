import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state'
import { updateNewPostText } from './redux/state'
import { addMessage } from './redux/state'
import { updateNewMessageText } from './redux/state'

import { BrowserRouter } from 'react-router-dom';



export let rerenderEntireTree = (state) => {
    ReactDOM.render(<React.StrictMode>
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
        </BrowserRouter></React.StrictMode>, document.getElementById('root')
    );
}


reportWebVitals();
