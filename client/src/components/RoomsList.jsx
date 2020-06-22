import React from 'react';
import Messenger from './Messenger.jsx';

const RoomsList = ({rooms, friends, messages}) => {
  var roomsList = Object.entries(rooms);
  var getRoomFriendsList = (room) => {
    var roomFriendsList = [];
    var friendsList = Object.values(friends)
    roomFriendsList = friendsList.filter(friend => (
      room.users.includes(friend.user)
    ))
    return roomFriendsList;
  }
  var getRoomMessagesList = (id) => {
    var roomMessagesList = [];
    var messagesList = Object.values(messages);
    console.log(messagesList)
    roomMessagesList = messagesList.filter(message => (
      message.room == id
    ))
    return roomMessagesList;
  }
  return(
    <div>
      {roomsList.map((room, index) => {
        var [id, room] = room
        return (
          <Messenger 
            key={index} 
            friendsList={getRoomFriendsList(room)} 
            roomId={id} 
            room={room} 
            messagesList={getRoomMessagesList(id)}
          /> 
        )
      })}
    </div>
  )
}
  
export default RoomsList;
