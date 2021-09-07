import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

// let s = {
//   'nav': 'Navbar_nav__1k_o9',
//   'item': 'Navbar_item__GCDhY',
// }
{/* <div className={`${s.item} ${s.active}`}>
      <a>Messages</a>
    </div> */}

function Navbar() {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
    </div>
    <p></p>
    <div className={s.item}>
      <NavLink to="/setting" activeClassName={s.activeLink}>Setting</NavLink>
    </div>
    <p></p>
    <div className={s.item}>
      <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
    </div>
    <div className={s.friends}>
      <div>
        Sergey
        <img src="https://politeka.net/images/2019/11/07/s5v80qnxgMYD0GaNAAxhNyR4SlIvGSIR5UbLlJzR.jpeg" alt="" />
      </div>
      <div>
        Andrey
        <img src="https://politeka.net/images/2019/11/07/s5v80qnxgMYD0GaNAAxhNyR4SlIvGSIR5UbLlJzR.jpeg" alt="" />
      </div>
      <div>
        John
        <img src="https://politeka.net/images/2019/11/07/s5v80qnxgMYD0GaNAAxhNyR4SlIvGSIR5UbLlJzR.jpeg" alt="" />
      </div>
    </div>
  </nav>
}

export default Navbar