import React from 'react';
import FriendsListEntry from './FriendsListEntry.jsx';

const FriendsList = ({friends}) => {
  var friendsList = Object.values(friends);
  return(
    <div>
      {friendsList.map((friend, index) => (
        <div key={index}>
          <FriendsListEntry key={index} friend={friend}/>
        </div>
      ))}
    </div>
  )
}
  
export default FriendsList;
