console.log('friends controller');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
  this.index = function(req, res){
    // res.json({placeholder:'index'});
    Friend.find({}, function(err, friends){
      res.json(friends);
    })
  };
  this.create = function(req, res){
    // res.json({placeholder:'create'});
    var friend = new Friend({
      name: req.params.name
    });
    friend.save(function(err){
      if(err){
        console.log('something went wrong');;
      } else {
        console.log('successfully added a friend!');
        res.redirect('/');
      }
    })
  };
  this.update = function(req, res){
    res.json({placeholder:'update'});

  };
  this.delete = function(req, res){
    // res.json({placeholder:'delete'});
    Friend.remove({name: req.params.name}, function(err){
      if(err) {
        console.log('something went wrong');
      } else { 
        console.log('successfully removed a friend!');
        res.redirect('/');
      }
    })

  };
  this.show = function(req, res){
    // res.json({placeholder:'show'});
    Friend.findOne({name: req.params.name}, function(err, friend){
      res.json(friend);
    })
  };
}
module.exports = new FriendsController();