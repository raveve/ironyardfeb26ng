(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('MainController', function (BikeProductsService, $scope) {
        var mainCtrl = this; // the scope of our controller is 'this'

        mainCtrl.products = BikeProductsService.getProducts();

        mainCtrl.addProduct = function (newProduct) {
          BikeProductsService.addProduct(newProduct);
          $scope.newProduct = {};
        };

        mainCtrl.deleteProduct = function(product) {
          BikeProductsService.deleteProduct(product);
        };

    });

})();
