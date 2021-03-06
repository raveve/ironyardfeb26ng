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
        templateUrl: 'views/admin.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/fullview/:productIndex', {
        templateUrl: 'views/fullview.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/edit/:productIndex', {
        templateUrl: 'views/edit.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/notfound', {
        templateUrl: 'views/notfound.html'
      })
      .otherwise({
        redirectTo: '/notfound'
      });
  });

})();
