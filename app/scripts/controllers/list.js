/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
'use strict';

var app = angular.module('mytodoApp')
.controller('ListCtrl', function ($scope, $http, serverService, $routeParams) {

     $http.get("http://localhost:3000/lists/"+  $routeParams.id +".json").then(function(resp) {
      $scope.list = resp.data;
      $scope.tasks = $scope.list.items;
      
     });

      $scope.addTodo= function() {
        serverService.postFromServer($scope.task).then(function(resp) {
        $scope.tasks.push(resp.data);
        });
      }
      $scope.showEdit= function(task){
        $scope.editName = true;
        $scope.existingTask = task;
      }

      $scope.edit = function(existingTask){
        $http.put("http://localhost:3000/lists/"+  $routeParams.id +".json", {task: existingTask.task}).then(function(resp) {
        $scope.existingTodo.task = resp.data.task;
         });
      }

      $scope.closeTab = function(){
        $scope.editName = false;
      }


  });

