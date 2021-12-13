import React from 'react';
const Message = (props) => {
  let message = React.createRef();
  let addInfo = () => {
    let text = message.current.value;
    alert(text);
  };
  return (
    <div>
      <div>
        <textarea ref={message}></textarea>
      </div>
      <div>
        <button onClick={addInfo}>Add</button>
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
};
export default Message;
