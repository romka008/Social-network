import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator, updateNewMessageText } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    updateNewText: (text) => {
      dispatch(updateNewMessageText(text))
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    },
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;