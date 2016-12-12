console.log('friends model');

var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
  name: String
})

var Friend = mongoose.model('Friend', FriendSchema);