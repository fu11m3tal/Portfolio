const { Userss } = require('../models/model.js');


exports.getFriends = (req, res) =>  {
  var friends = {
    steven: {
      user: "steven", 
      img: "/img/38467E60-6408-4521-925F-6F2F535B3BA4_1_105_c.jpeg"
    },
    michael: {
      user: "michael", 
      img: "/img/IMG_7391.jpeg"
    }, 
    dc: {
      user: 'dc', 
      img: "/img/IMG_1676.jpeg"
    }
  }
  res.send(friends);
}

exports.getMessages = (req, res) =>  {
  var messages = [{room: 0, users: ["dc"], message: "hello", status: "unread"}, {room: 1, users: ["michael"], message: "hello", status: "read"}, {room: 0, users: ["dc"], message: "hello", status: "unread"}, {room: 1, users: ["steven"], message: "fartttt", status: "unread"}];
  var data = {};
  messages.forEach((message, index) => (
    data[index] = message
  ))
  res.send(data);
}

