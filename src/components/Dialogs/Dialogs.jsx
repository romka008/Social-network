import DialogItems from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


function Dialogs(props) {

  let dialogsElement = props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id} />)
  let messagesElement = props.state.messages.map(m => <Message message={m.messages} />) 

  return <div className={s.dialogs}>
    <div className={s.dialogItems}>

      {dialogsElement}

    </div>
    <div className={s.messages}>
      {messagesElement}
    </div>
  </div>
}

export default Dialogs