console.log('Friends Factory');

app.factory('friendsFactory', ['$http', function($http){
  var friends = []; 
  var friend = {}; 
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        // console.log(returned_data);
        // console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          // callback(returned_data.data);
          callback();
        }
      });
    };
    this.update = function(id, editfriend, callback){ 
      $http.put(`/friends/${id}`, editfriend).then(function(data){
        console.log(data);
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      })
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
   //Note: this can be shortened to $http.get('/friends').then(callback); 
   //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){
      console.log("id: ", id);
      $http.delete(`/friends/${id}`).then(function(data){
        // for (var i = friends.length - 1; i >= 0; i--) {
        //   if(friends[i]._id === id){
        //     friends.splice(i, 1);
        //     break; 
        //   }    
        // };
        console.log("here?");
        if (typeof(callback) == 'function'){
          callback(data);
        } 
      })
    };
    this.show = function(id, callback){
      $http.get(`/friends/${id}`).then(function(data){
        console.log("show data: ", data);
        // friend = data; 
        callback(data.data); 
      })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(callback){
        callback(friend);
    };
  }
  // console.log(new FriendsFactory());
  return new FriendsFactory();
}])