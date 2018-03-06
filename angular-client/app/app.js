const app = angular.module("challenge", ["ngRoute"]);

app.config([
  $routeProvider,
  $locationProvider,
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        template: `<blog></blog>`
      })
      .when("/fav", {
        template: `<favlist></favlist>`
      })
      .otherwise({
        redirect: "/"
      });
  }
]);
