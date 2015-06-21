(function(){

  'use strict';

  var app, dependencies;

  dependencies = [
    'ngResource', 'ngRoute','myApp.services','myApp.controllers',
    'form.controllers'
  ];

  app = angular.module('myApp', dependencies);
  
  app.config( function( $routeProvider ){   

    $routeProvider.when('/', {
      templateUrl: 'partials/view1.html',
      controller: 'PostsCtrl'
    });   


    $routeProvider.when('/formulario', {
      templateUrl: 'partials/view2.html',
      controller: 'FormCtrl'
    });
    

    $routeProvider.otherwise({
      templateUrl:'partials/404.html'
    });

  }); 

})();
