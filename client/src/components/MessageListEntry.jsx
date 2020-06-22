import React from 'react';
import BadgeNotification from './BadgeNotification.jsx';

const MessageListEntry = ({message}) => {
  return(
    <div>
      <p>{message.user}: {message.message}</p>
    </div>
  )
}
  
export default MessageListEntry;
