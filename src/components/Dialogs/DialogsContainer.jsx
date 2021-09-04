import React from 'react';
import { addMessageActionCreator, updateNewMessageText } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (text) => {
    let action = updateNewMessageText(text)
    props.store.dispatch(action);
  }

  return <Dialogs updateNewText={onMessageChange} sendMessage={addMessage}
    dialogsPage={state} />
}

export default DialogsContainer;