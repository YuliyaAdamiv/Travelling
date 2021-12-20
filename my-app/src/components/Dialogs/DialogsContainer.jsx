import React from 'react';
import './Dialogs.modules.css';
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../redux/storeContext';
const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };
        return (
          <Dialogs
            updateNewMessage={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogs={props.store}
            state={props.state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;
