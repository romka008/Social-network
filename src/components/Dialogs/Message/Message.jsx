import React from 'react';
import s from './../Dialogs.module.css';

function Message(props) {

  return <div><div className={s.message}>{props.message}</div></div>
}

export default Message