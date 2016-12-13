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
    console.log(req.body);
    var friend = new Friend({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthday: req.body.birthday
    });
    friend.save(function(err){
      if(err){
        console.log(err);
        console.log('create method saving friend');;
      } else {
        console.log('successfully added a friend!');
        res.redirect('/');
      }
    })
  };
  this.update = function(req, res){
    // res.json({placeholder:'update'});
    var editfriend = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthday: req.body.birthday
    }
    Friend.findOneAndUpdate({_id: req.params.id}, editfriend, function(err, friend){
      res.json(friend);
    })

  };
  this.delete = function(req, res){
    // res.json({placeholder:'delete'});
    console.log("friends delete req params ", req.params);
    Friend.remove({_id: req.params.id}, function(err){
      if(err) {
        console.log('something went wrong. in delete in friends.js');
      } else { 
        console.log('successfully removed a friend!');
        // res.redirect('/');
        res.end(); 
      }
    })

  };
  this.show = function(req, res){
    // res.json({placeholder:'show'});
    console.log(req.params);
    Friend.findOne({_id: req.params.id}, function(err, friend){
      res.json(friend);
    })
  };
}
module.exports = new FriendsController();