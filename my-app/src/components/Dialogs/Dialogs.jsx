import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Messege'
import './Dialogs.modules.css';
const Dialogs = () => {
  return (
    <div className="dialogs">
      <div className="dialogsItems">
       <DialogItem name="Dimych" id="1"/>
       <DialogItem name="Andrey" id="2"/>
       <DialogItem name="Sveta" id="3"/>
       <DialogItem name="Sasha" id="4"/>
       <DialogItem name="Viktor" id="5"/>
       <DialogItem name="Valera" id="6"/>
      </div>
      <div className="messages">
        <Message message="Hi"/>
        <Message message="How are you?"/>
        <Message message="Yo"/>
      </div>
    </div>
  );
};
export default Dialogs;
