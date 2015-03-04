(function () {
  "use strict";

  angular.module('peddlerApp', [
    'ngRoute',
    'productRoute',
    'cartRoute',
    'adminRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'common/views/main.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/notfound', {
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/notfound'
      });
  });

})();
