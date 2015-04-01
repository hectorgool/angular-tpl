(function(){

  'use strict';

  var app, dependencies;

  dependencies = ['ngResource', 'ngRoute','myApp.services','myApp.controllers'];
  app = angular.module('myApp', dependencies);
  
  app.config( function( $routeProvider ){   

    $routeProvider.when('/', {
      templateUrl: 'partials/view1.html',
      controller: 'PostsCtrl'
    });   


    $routeProvider.when('/signup', {
      templateUrl: 'partials/view2.html'//,
      //controller: 'PostCtrl'
    });
    

    $routeProvider.otherwise({
      templateUrl:'partials/404.html'
    });

  }); 

})();
