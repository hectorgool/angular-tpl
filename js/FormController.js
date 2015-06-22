(function(){


  'use strict';

  var app = angular.module('form.controllers', []);
  
  app.controller('FormCtrl', ['$scope', 
    function ($scope) {

      $scope.data = {}

      $scope.add = function() {
        console.log('data: ' + JSON.stringify($scope.data) );
      };
      
    }
  ]);


})();