import React from 'react'
import MessageStyles from '../styles//Message.module.css'

const Message = ({text, type}) => {
  return (
    <div className={MessageStyles.messageContainer}>
        <div className={type === 'error' ? MessageStyles.error : MessageStyles.success}>
            {text}
        </div>
    </div>
  );
};

export default Message;
