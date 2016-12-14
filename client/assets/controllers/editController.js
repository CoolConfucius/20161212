console.log("editController and showController");

var app = angular.module('app');

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
      // $scope.friend
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
  $scope.editfriend = {};
  var id = $routeParams.id;
  friendsFactory.show(id, function(data){
    $scope.editfriend = data; 
  })
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