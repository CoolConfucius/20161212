console.log('friends model');

var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
  firstname: String, 
  lastname: String, 
  birthday: Date,
}, {timestamps: true})

var Friend = mongoose.model('Friend', FriendSchema);