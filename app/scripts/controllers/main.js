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

      $scope.todos = serverService.getFromServer();

      $scope.addTodo = function(){
        $http.post("http://localhost:3000/lists.json", {name: $scope.todo})
        .then(function(response){
          $scope.todos.push(response.data);
        });
      };

      $scope.clicked = function(){
       window.location = "#/todo";
      };

     $scope.delete = function (todo) {            
        $http.delete("http://localhost:3000/lists/" + todo.id + ".json")
        .then(function(response){

      $scope.todos.splice( $scope.todos.indexOf(todo), 1 );

        });
      };


   


  });
