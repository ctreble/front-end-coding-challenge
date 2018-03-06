angular.module("challenge").service("dataService", function($http) {
  this.getData = function(callback) {
    $http.get("http://localhost:3000/posts").then(data => { 
      callback(data);
    });
  };
});
