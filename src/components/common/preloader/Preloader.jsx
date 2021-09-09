import React from 'react';
import preloader from '../../../assets/images/download.svg';
import s from './Preloader.module.css';

function Preloader(props) {
    return <div className={s.preloader}>
        <img src={preloader} alt='' /></div>
}

export default Preloader;