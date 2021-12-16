import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Messege';
import './Dialogs.modules.css';
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/state';
const Dialogs = (props) => {
  // let state = props.store.getState().dialogsPage;
  let newMessageBody = props.state.newMessageBody;
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let dialogsElements = props.state.dialog.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.message.map((messageItem) => (
    <Message message={messageItem.message} />
  ));
  return (
    <div className="dialogs">
      <div className="dialogsItems">{dialogsElements}</div>
      <div className="messages">
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
