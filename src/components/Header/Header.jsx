import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


function Header(props) {
    return <header className={s.header}>
        <img src="https://img2.freepng.ru/20180509/gvw/kisspng-globe-earth-clip-art-5af366a46f1587.271956161525900964455.jpg" alt="" />

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
               : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header