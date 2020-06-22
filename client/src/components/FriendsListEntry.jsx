import React from 'react';
import BadgeNotification from './BadgeNotification.jsx';

const FriendsListEntry = ({friend}) => {
  return(
    <div>
      <BadgeNotification friend={friend}/>
    </div>
  )
}
  
export default FriendsListEntry;
