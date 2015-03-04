(function () {
  "use strict";

  angular.module('cartRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cart', {
        templateUrl: 'cart/views/cart.html',
        controller: 'CartController as cartCtrl'
      })
  });

})();
