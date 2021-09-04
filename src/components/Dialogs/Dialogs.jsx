import React from 'react';
import DialogItems from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



function Dialogs(props) {

  let state = props.dialogsPage

  let dialogsElement = state.dialogs.map(d => <DialogItems name={d.name} id={d.id} />)
  let messagesElement = state.messages.map(m => <Message message={m.messages} />)

  
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewText(text);
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
          value={state.newMessageText}/>
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  </div>
}

export default Dialogs