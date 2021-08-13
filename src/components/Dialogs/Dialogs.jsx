import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

function DialogItems(props) {
  return  <div className={s.dialog}>
    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
  </div>
}

function Message(props) {
  return  <div className={s.message}>{props.message}</div>
}

function Dialogs(props) {
  return <div className={s.dialogs}>
    <div className={s.dialogItems}>
      <DialogItems name='Sergey' id='1'/>
      <DialogItems name='Andrey' id='2'/>
      <DialogItems name='John' id='3'/>
      <DialogItems name='Ou Kee' id='4'/>
      <DialogItems name='No mercy' id='5'/>
      <DialogItems name='Kenjoh' id='6'/>
      <DialogItems name='Roman' id='7'/>
    </div>
    <div className={s.messages}>
      <Message message='What is it?'/>
      <Message message='Where are u?'/>
      <Message message='Yo'/>
    </div>
  </div>
}

export default Dialogs