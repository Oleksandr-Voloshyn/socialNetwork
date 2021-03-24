import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControlor/FormsControler";

const maxLength = maxLengthCreator(5)


const Dialogs = (props) => {
  let userName = props.dialogsPage.dialog.map(name => <DialogsItem name={name.name} id={name.id}/>)
  let messageElem = props.dialogsPage.message.map(message => <Message message={message.message}/>)
  let newMessage = props.dialogsPage.newMessageText


  let alertMes = (value) => {
    props.addMessageAction(value.messageText);

  };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {userName}
      </div>

      <div className={s.messages}>
        {messageElem}
 <DialogsReduxForm onSubmit={alertMes}/>
      </div>
    </div>
  )
}

const addMessaga = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name={"messageText"}
      validate={[required, maxLength]}/>
      <button> Send message</button>
    </form>
  )
}
const DialogsReduxForm = reduxForm({form:'message'})(addMessaga)

export default Dialogs;
