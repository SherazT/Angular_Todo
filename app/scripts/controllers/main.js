/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
'use strict';

var app = angular.module('mytodoApp')
.controller('MainCtrl', function ($scope, $http, serverService) {

     serverService.getFromServer().then(function(resp) {
      $scope.todos = resp.data;
     });

      $scope.addTodo= function() {
        serverService.postFromServer($scope.todo).then(function(resp) {
        $scope.todos.push(resp.data);
        });
      }
      $scope.showEdit= function(todo){
        $scope.editName = true;
        $scope.existingTodo = todo;
      }
      $scope.closeTab = function(){
        $scope.editName = false;
      }

      $scope.clicked = function(todo){
       window.location = '#/list/' + todo.id;
      };
      
      $scope.edit = function(existingTodo){
        serverService.putFromServer(existingTodo).then(function(resp) {
        $scope.existingTodo.name = resp.data.name;
         });
      }

      $scope.delete = function (todo) {            
        $http.delete("http://localhost:3000/lists/" + todo.id + ".json")
        $scope.todos.splice( $scope.todos.indexOf(todo), 1 );
      };
  });

