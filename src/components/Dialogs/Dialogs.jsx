import React from 'react';
import DialogItems from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';



const maxLength50 = maxLengthCreator(50)

function Dialogs(props) {
  let state = props.dialogsPage

  let dialogsElement = state.dialogs.map(d => <DialogItems name={d.name} key={d.id} id={d.id} />)
  let messagesElement = state.messages.map(m => <Message message={m.messages} key={m.id} />)


  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  }

  return <div className={s.dialogs}>
    <div className={s.dialogItems}>
      {dialogsElement}
    </div>
    <div className={s.messages}>
      <div>{messagesElement}</div>
    </div>
    <AddMessageFormRedux onSubmit={addNewMessage} />
  </div>
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component={Textarea} name='newMessageText' placeholder='Emter your message'
          validate={[required, maxLength50]} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)


export default Dialogs