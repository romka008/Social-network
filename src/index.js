import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, messages: 'What is it?', likesCount: '100' },
  { id: 2, messages: 'Where are u?', likesCount: '5634' },
  { id: 3, messages: 'What are you doing?', likesCount: '594' },
  { id: 4, messages: 'What are you doing?', likesCount: '594' },
]
let dialogs = [
  { id: 1, name: 'Sergey' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Ou Kee' },
  { id: 5, name: 'No mercy' },
  { id: 6, name: 'Kenjoh' },
  { id: 7, name: 'Roman' },
]
let messages = [
  { messages: 'What is it?' },
  { messages: 'Where are u?' },
  { messages: 'Yo' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
