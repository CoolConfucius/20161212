console.log("editController and showController");

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
      $scope.friends.splice(index, 1);
    })
  }
}])


app.controller('showController', ['$scope', '$location', '$routeParams', 'friendsFactory', function($scope, $location, $routeParams, friendsFactory){
  console.log("editController");
  $scope.friend = {}; 
  var id = $routeParams.id;
  friendsFactory.show(id, function(data){
    $scope.friend = data; 
  })


  $scope.confirmedit = function(){
    console.log("confirmedit ", $routeParams);
    
    friendsFactory.update(id, $scope.editfriend, function(){
      $scope.friend
      // $scope.friends.push($scope.editfriend);
      // $scope.editfriend = {
      //   firstname: '', lastname: '', birthday: ''
      // }
      $location.url('/');
    })
  }
}])

app.controller('editController', ['$scope', '$location', '$routeParams', 'friendsFactory', function($scope, $location, $routeParams, friendsFactory){
  console.log("editController");
  $scope.friend; 

  $scope.editfriend = {
    firstname: '', lastname: '', birthday: ''
  }
  $scope.confirmedit = function(){
    console.log("confirmedit ", $routeParams);
    var id = $routeParams.id;
    friendsFactory.update(id, $scope.editfriend, function(){
      $scope.friend
      // $scope.friends.push($scope.editfriend);
      // $scope.editfriend = {
      //   firstname: '', lastname: '', birthday: ''
      // }
      $location.url('/');
    })
  }
}])