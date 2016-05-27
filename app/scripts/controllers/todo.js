'use strict';

angular.module('mytodoApp')
  .controller('TodoCtrl', function ($scope, $http) {

      $scope.clicked = function(){
       window.location = "#/";
      };
      

  });
