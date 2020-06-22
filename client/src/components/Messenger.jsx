import React from 'react';
import BadgeNotification from './BadgeNotification.jsx';

const Messenger = ({messagesList, friendsList, postMessage}) => {
  return(
    <div id="messenger">
      {friendsList.map((friend, index) => (
        <BadgeNotification 
          key={index} 
          friend={friend}
        />
      ))}
      {messagesList.map((message, index) => (
        <p key={index}>{message.users[0]}: {message.message}</p>
      ))}
      <input id="messageInput" placeholder="message"></input>
      <input id="tagsInput" placeholder="tags"></input>
      <button id="messageSendButton" onClick={postMessage}>Send</button>
    </div>
  )
}
  
export default Messenger;
