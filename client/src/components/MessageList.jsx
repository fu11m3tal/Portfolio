import React from 'react';
import BadgeNotification from './BadgeNotification.jsx';
import MessageListEntry from './MessageListEntry.jsx';

const MessageList = ({room, messages, friends, postMessage}) => {
  
  var getRoomFriendsList = () => {
    var roomFriendsList = [];
    var friendsList = Object.values(friends)
    roomFriendsList = friendsList.filter(friend => (
      room.friends.includes(friend.user)
    ))
    return roomFriendsList;
  }
  
  var roomFriendsList = getRoomFriendsList();
  return(
    <div id="messenger">
      {roomFriendsList.map((friend, index) => (
        <BadgeNotification 
          key={index} 
          friend={friend}
        />
      ))}
      {messages.map((message, index) => (
        <MessageListEntry 
          key={index} 
          message={message} 
        /> 
      ))}
      <input id="messageInput" placeholder="message"></input>
      <input id="tagsInput" placeholder="tags"></input>
      <button id="messageSendButton" onClick={postMessage}>Send</button>
    </div>
  )
}
  
export default MessageList;
