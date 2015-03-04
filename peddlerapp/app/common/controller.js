(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('MainController', function ($location) {

      var mainCtrl = this; // the scope of our controller is 'this'

        mainCtrl.login = function (userName) {
          if(userName === "raven") {
            $location.path('/admin');
          }
        };

    });

})();
