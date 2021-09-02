import React from 'react';
import DialogItems from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


function Dialogs(props) {

  let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItems name={d.name} id={d.id} />)
  let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.messages} />)

  
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({type: 'ADD-MESSAGE'});
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
  }

  return <div className={s.dialogs}>
    <div className={s.dialogItems}>
      {dialogsElement}
    </div>
    <div className={s.messages}>
      {messagesElement}
      <div>
        <div>
          <textarea onChange={onMessageChange} name="" ref={newMessageElement} cols="30" rows="5"
          value={props.dialogsPage.newMessageText}/>
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  </div>
}

export default Dialogs