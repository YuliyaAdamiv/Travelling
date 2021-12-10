import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Messege'
import './Dialogs.modules.css';
const Dialogs = (props) => {
    let dialogsElements=props.state.dialog.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements=props.state.message.map(messageItem => <Message message={messageItem.message}/>)
  return (
    <div className="dialogs">
      <div className="dialogsItems">
       {dialogsElements}
      </div>
      <div className="messages">
       {messagesElements}
      </div>
    </div>
  );
};
export default Dialogs;
