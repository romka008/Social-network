import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

function Dialogs(props) {
  return <div className={s.dialogs}>
    <div className={s.dialogItems}>
      <div className={s.dialog}>
        <NavLink to='/dialogs/1'>Sergey</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to='/dialogs/2'>Andrey</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to='/dialogs/3'>John</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to='/dialogs/4'>Ou Kee</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to='/dialogs/5'>No mercy</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to='/dialogs/6'>Kenjoh</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to='/dialogs/7'>Roman</NavLink>
      </div>
    </div>
    <div className={s.messages}>
      <div className={s.message}>What is it?</div>
      <div className={s.message}>Where are u?</div>
      <div className={s.message}>Yo</div>
    </div>
  </div>
}

export default Dialogs