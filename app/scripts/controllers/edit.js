/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
'use strict';

var app = angular.module('mytodoApp')
.controller('EditCtrl', function ($scope, $http, serverService) {

  $scope.edit= function() {
        serverService.putFromServer($scope.todo).then(function(resp) {
        $scope.todo = resp.data;
        });
      }
  });

