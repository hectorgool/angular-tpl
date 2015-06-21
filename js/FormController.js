(function(){


  'use strict';

  var app = angular.module('form.controllers', []);
  
  app.controller('FormCtrl', ['$scope', 
    function ($scope) {

      $scope.data = {}

      /*
      $scope.$watch('myform.nombres.$invalid', function(newval) {
        $scope.isInvalid = newval;
      });
      */
      
    }
  ]);


})();