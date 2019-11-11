const { Users } = require('../models/model.js');

exports.getResume = (req, res) =>  {
  res.send("resume")
}

exports.getLinkedIn = (req, res) => {
  res.send("https://www.linkedin.com/in/stevenyoh")
}
