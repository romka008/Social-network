import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

function DialogItems(props) {
  return <div className={s.dialog}>
    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
  </div>
}

function Message(props) {
  return <div className={s.message}>{props.message}</div>
}

function Dialogs(props) {
  let dialogsData = [
    { id: 1, name: 'Sergey' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Ou Kee' },
    { id: 5, name: 'No mercy' },
    { id: 6, name: 'Kenjoh' },
    { id: 7, name: 'Roman' },
  ]

  let messagesData = [
    { messages: 'What is it?' },
    { messages: 'Where are u?' },
    { messages: 'Yo' },
  ]

  return <div className={s.dialogs}>
    <div className={s.dialogItems}>
      <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} />
      <DialogItems name={dialogsData[1].name} id={dialogsData[1].id} />
    </div>
    <div className={s.messages}>
      <Message message={messagesData[0].messages} />
      <Message message={messagesData[1].messages} />
    </div>
  </div>
}

export default Dialogs