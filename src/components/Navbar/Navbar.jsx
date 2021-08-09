import s from './Navbar.module.css';

// let s = {
//   'nav': 'Navbar_nav__1k_o9',
//   'item': 'Navbar_item__GCDhY',
// }

function Navbar() {
  return <nav className={s.nav}>
    <div className={s.item}>
      <a href="">Profile</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <a>Messages</a>
    </div>
    <div className={s.item}>
      <a href="">News</a>
    </div>
    <div className={s.item}>
      <a href="">Music</a>
    </div>
    <p></p>
    <div className={s.item}>
      <a href="">Setting</a>
    </div>
  </nav>
}

export default Navbar