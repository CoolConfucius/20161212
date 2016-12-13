console.log("appjs");
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/list.html'
  })
  .when('/new', {
    templateUrl: 'partials/new.html'
  })

})