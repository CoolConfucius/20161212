console.log('friends controller');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
  this.index = function(req, res){
    // res.json({placeholder:'index'});
    Friend.find({}, function(err, friends))
  };
  this.create = function(req, res){
    // res.json({placeholder:'create'});

  };
  this.update = function(req, res){
    // res.json({placeholder:'update'});

  };
  this.delete = function(req, res){
    // res.json({placeholder:'delete'});

  };
  this.show = function(req, res){
    // res.json({placeholder:'show'});

  };
}
module.exports = new FriendsController();