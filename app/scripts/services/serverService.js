

app.factory('serverService', function() {
  return{
    getFromServer: function($http){

    $http.get("http://localhost:3000/lists.json")
      .then(function(response){

        return response.data;
      });


    }
  };
});