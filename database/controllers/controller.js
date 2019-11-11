const { Users } = require('../models/model.js');

exports.getAllAccount = (req, res) =>  {
  Users.find({})
  .then((users) => {
    res.send(users)
  })
}

