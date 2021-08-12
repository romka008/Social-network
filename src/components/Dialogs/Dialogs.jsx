import s from './Dialogs.module.css';

function Dialogs(props) {
  return <div className={s.dialogs}>
    <div className={s.dialogItems}>
      <div className={s.dialog}>Sergey</div>
      <div className={s.dialog}>Andrey</div>
      <div className={s.dialog}>John</div>
      <div className={s.dialog}>Ou Kee</div>
      <div className={s.dialog}>No mercy</div>
      <div className={s.dialog}>Kenjoh</div>
      <div className={s.dialog}>Roman</div>
    </div>
    <div className={s.messages}>
      <div className={s.message}>What is it?</div>
      <div className={s.message}>Where are u?</div>
      <div className={s.message}>Yo</div>
    </div>
  </div>
}

export default Dialogs