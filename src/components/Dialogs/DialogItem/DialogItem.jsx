import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

function DialogItems(props) {
  return <div className={s.dialog}>
    <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    <div>
      <img src="https://politeka.net/images/2019/11/07/s5v80qnxgMYD0GaNAAxhNyR4SlIvGSIR5UbLlJzR.jpeg" alt="" />
    </div>
  </div>
}

export default DialogItems