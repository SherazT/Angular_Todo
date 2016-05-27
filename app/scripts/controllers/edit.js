'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('EditCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
