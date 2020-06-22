import React from 'react';
import BadgeNotification from './BadgeNotification.jsx';

const Messenger = ({room, messages, friends, postMessage}) => {
  
  var getRoomFriendsList = () => {
    var roomFriendsList = [];
    var friendsList = Object.values(friends)
    roomFriendsList = friendsList.filter(friend => (
      room.friends.includes(friend.user)
    ))
    console.log(room, roomFriendsList)
    return roomFriendsList;
  }
  return(
    <div id="messenger">
      {getRoomFriendsList().map((friend, index) => (
        <BadgeNotification key={index} friend={friend}/>
      ))}
      {messages.map((message, index) => (
        <p key={index}>{friends[message.user].user}: {message.message}</p>
      ))}
      <input id="messageInput" placeholder="message"></input>
      <input id="tagsInput" placeholder="tags"></input>
      <button id="messageSendButton" onClick={postMessage}>Send</button>
    </div>
  )
}
  
export default Messenger;
