const app = angular.module("challenge", ["ngRoute"]);

app.config(
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        template: `<blog></blog>`
      })
      .when("/fav", {
        template: `<blog></blog>`
      })
      .otherwise({
        redirect: "/"
      });
  }
);
