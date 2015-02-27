(function () {
  "use strict";

  angular.module('peddlerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html'
      })
      .when('/new', {
        templateUrl: 'views/new.html'
      })
      .when('/products', {
        templateUrl: 'views/products.html'
      })
      .when('/notfound', {
        templateUrl: 'views/notfound.html'
      })
      .otherwise({
        redirectTo: '/notfound'
      });
  });

})();
