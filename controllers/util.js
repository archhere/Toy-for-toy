var User = require("../models/user.js");


exports.getUsers = function(req, res, next){
  const query = User.find({});
  query.exec(function(err, user){
    res.send(user);
  });
};
