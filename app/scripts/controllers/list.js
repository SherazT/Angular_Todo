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
      $scope.tasks = $scope.list.items; });

      $scope.addTask= function() {
        
   $http.post("http://localhost:3000/lists/" +$routeParams.id +"/items"+ 
    ".json", {item:{task: $scope.task, description: $scope.description}}).then(function(resp) {

        $scope.tasks.push(resp.data);
        });
      }
      $scope.showEdit= function(task){
        $scope.editName = true;
        $scope.existingTask = task;
      } 
      
      $scope.closeTab = function(){
        $scope.editName = false;
      }

      $scope.markComplete = function(task){ 
        if (task.completed == false){
        task.completed = true;
        }
        else{
        task.completed = false;
        }

         $http.put("http://localhost:3000/lists/"+
          task.list_id+"/items/"+
          task.id+".json", 
          {item:task})
         .then(function(resp){
          
         task = resp.data;
         }
         ) 
       };

      $scope.back = function(){
       window.location = '#/';
      };

       $scope.edit = function(){ 
         $http.put("http://localhost:3000/lists/"+
          $scope.existingTask.list_id+"/items/"+
          $scope.existingTask.id+".json", 
          {item:$scope.existingTask})
         .then(function(resp){
          
         $scope.existingTask = resp.data;
         }
         ) 
       };

  });

