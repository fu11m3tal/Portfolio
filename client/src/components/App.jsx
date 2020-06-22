import React from 'react';
import axios from 'axios';
import RoomsList from './RoomsList.jsx';
import FriendsList from './FriendsList.jsx';
import Messenger from './Messenger.jsx'; 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { 
      account: { 
        user: "steven",
        friends: {},
      },
      rooms: { 
        0: { users: ["michael", "dc"], messages: []}, 
        1: { users: ["dc"], messages: []}
      },
      messages: [],
      unread: [],
      read: [],
    }
    this.getMessages = this.getMessages.bind(this);
    this.getFriends = this.getFriends.bind(this);
    this.generateChatRoom = this.generateChatRoom.bind(this);
    this.generateMessage = this.generateMessage.bind(this);
  }

  getFriends(cb) {
    axios.get('/api/user/friends')
      .then((response) => {
        var { account } = this.state;
        account.friends = response.data;
        this.setState({account: account})
      })
      .then(result => {
        cb();
      })
      .catch(err => {
        console.log(err);
      })
  }

  getMessages() {
    axios.get('/api/user/messages')
      .then(({data}) => {
        this.setState({messages: data});
      })
      .then(response => {
        this.filterUnreadMessages();
      })
      .catch(err => {
        console.log(err);
      })
  }

  generateChatRoom(cb) {
    class Room {
      constructor() {
        this.id = Math.random(0,10000)
        this.members = [];
        this.messages = [];
      }
      post() {
        var message = new Message();
        this.messages.push(message);
      }
      addMember() {
        
      }
      removeMember() {
        
      }
    }
    var room = new Room();
    class Message {
      constructor() {
        // this.account = this.state.account.user;
        this.id = Math.random(0,10000)
        this.roomId = room.id;
        this.to = [];
        this.message = document.getElementById('messageInput').value;
        this.tags = document.getElementById('tagsInput').value.trim().replace(/\s/g, '').split("#").splice(1) || [];
        this.status = "unread";
      }
      unread() {
        if(this.status = "read") this.status = "unread";
      }
      read() {
        if(this.status = "unread") this.status = "read";
      }
      send() {
        axios.post(`/api/messages`)
          .then(result => {
            
          })
          .catch(err => {
            console.log(error);
          })
      }
    }
    return room;
  }

  generateMessage() {
    class Message {
      constructor() {
        // this.account = this.state.account.user;
        this.to = members;
        this.message = document.getElementById('messageInput').value;
        this.tags = document.getElementById('tagsInput').value.trim().replace(/\s/g, '').split("#").splice(1) || [];
        this.status = "unread";
      }
      unread() {
        if(this.status = "read") this.status = "unread";
      }
      read() {
        if(this.status = "unread") this.status = "read";
      }
      send() {
        axios.post(`/api/messages`)
          .then(result => {
            
          })
          .catch(err => {
            console.log(error);
          })
      }
    }
    return new Message()
    // messages.push(new Message(contents, tags));
    // document.getElementById('messageInput').value = ""
    // document.getElementById('tagsInput').value = ""
    // this.setState({messages: messages})
    
  }

  filterUnreadMessages() {
    var {messages} = this.state;
    var unread = messages.filter(message => (
      message.status === "unread"
    ))
    this.setState({unread: unread});
  }

  removeMessageFromUnreadList(id) {
    var unread = messages.filter(message => (
      message.id != id
    ));
    this.setState({unread: unread});
  }

  increaseNotificationCount(id) {
    var {friends} = this.state;
    friends[id].unread++;
    this.setState({friends: friends})
  }

  decreaseNotificationCount(id) {
    var {friends} = this.state;
    friends[id].unread--;
    this.setState({friends: friends});
  }

  getUnreadMessageCount() {
    var {friends, messages} =this.state;
    messages.forEach((message) => (
      friends[message.from].hasOwnProperty("unread") ? friends[message.from].unread++ : friends[message.from].unread = 1
    ))
    this.setState({friends: friends})
  }

  componentDidMount() {
    this.getFriends(this.getMessages);
    // document.getElementById('messageInput').addEventListener("keyup", function(event) {
    //   event.preventDefault();
    //   if (event.keyCode === 13) {
    //     document.getElementById('messageSendButton').click();
    //   }
    // });
  }
  
  render() {
    var { account, rooms , messages } = this.state;
    var { friends } = account;
    return (
      <div className="app">
        <button onClick={() => {console.log(this.state)}}>state</button>
        <RoomsList rooms={rooms} friends={friends} messages={messages}/>
        <FriendsList friends={friends}/>
      </div>
    )
  }
}

export default App;
