import React from 'react';
import { addMessageActionCreator, updateNewMessageText } from '../../redux/dialogs-reducer';
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';



function DialogsContainer() {

  return <StoreContext.Consumer> 
    {
    (store) => {
      let state = store.getState().dialogsPage;

      let addMessage = () => {
        store.dispatch(addMessageActionCreator());
      }

      let onMessageChange = (text) => {
        let action = updateNewMessageText(text)
        store.dispatch(action);
      }
      return <Dialogs updateNewText={onMessageChange} sendMessage={addMessage}
        dialogsPage={state} />
    }
  }

  </StoreContext.Consumer>
}

export default DialogsContainer;