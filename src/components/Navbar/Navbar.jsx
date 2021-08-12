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
      <a href="/profile">Profile</a>
    </div>
    <div className={s.item}>
      <a href="/dialogs">Messages</a>
    </div>
    <div className={s.item}>
      <a href="/news">News</a>
    </div>
    <div className={s.item}>
      <a href="/music">Music</a>
    </div>
    <p></p>
    <div className={s.item}>
      <a href="/setting">Setting</a>
    </div>
  </nav>
}

export default Navbar