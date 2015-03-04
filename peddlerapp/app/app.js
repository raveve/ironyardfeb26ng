(function () {
  "use strict";

  angular.module('peddlerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'common/views/main.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin', {
        templateUrl: 'admin/views/admin.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/new', {
        templateUrl: 'admin/views/new.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/edit/:productid', {
        templateUrl: 'admin/views/edit.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/products', {
        templateUrl: 'products/views/products.html',
        controller: 'ProductsController as prodCtrl'
      })
      .when('/fullview/:productid', {
        templateUrl: 'products/views/fullview.html',
        controller: 'ProductsController as prodCtrl'
      })
      .when('/cart', {
        templateUrl: 'cart/views/cart.html',
        controller: 'CartController as cartCtrl'
      })
      .when('/notfound', {
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/notfound'
      });
  });

})();
