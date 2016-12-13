console.log("newController and listController");

var app = angular.module('app');

app.controller('listController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory){
  console.log("listController");
  $scope.friends = []; 
  friendsFactory.index(function(data){
    $scope.friends = data; 
  })
}])

app.controller('newController', [function(){
  console.log("newController");
}])