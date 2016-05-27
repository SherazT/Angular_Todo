app.factory('serverService', function($http) {
  return{
    getFromServer: function(){
      return $http.get("http://localhost:3000/lists.json");
    }
    
  };
});