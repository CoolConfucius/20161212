console.log("newController and listController");

var app = angular.module('app');

app.controller('listController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory){
  console.log("listController");
  $scope.friends = []; 
  friendsFactory.index(function(data){
    $scope.friends = data; 
  })

  $scope.deletefriend = function(index){
    console.log($scope.friends[index]);
    var id = $scope.friends[index]._id; 
    friendsFactory.delete(id, function(){
      // $scope.friends.splice(index, 1);
    })
  }

  $scope.showfriend = function(index){
    console.log($scope.friends[index]);
    var id = $scope.friends[index]._id; 
    // friendsFactory.show(id, function(){
    //   $scope.friends.splice(index, 1);
    // }) 
    $location.url(`/friends/${id}`);
  }
}])

app.controller('newController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory){
  console.log("newController");
  $scope.newfriend = {
    firstname: '', lastname: '', birthday: ''
  }
  $scope.addfriend = function(){
    console.log("addfriend");
    friendsFactory.create($scope.newfriend, function(){
      // $scope.friends.push($scope.newfriend);
      // $scope.newfriend = {
      //   firstname: '', lastname: '', birthday: ''
      // }
      $location.url('/');
    })
  }
}])