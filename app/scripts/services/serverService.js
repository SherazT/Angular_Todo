app.factory('serverService', function($http) {
  return{
    getFromServer: function(){
      return $http.get("http://localhost:3000/lists.json");
    },
    postFromServer: function(todo){
      return $http.post("http://localhost:3000/lists.json", {name: todo});
    },

    putFromServer: function(existingTodo){
      return $http.put("http://localhost:3000/lists/" + existingTodo.id + ".json", {name: existingTodo.name});
    }

  };
});