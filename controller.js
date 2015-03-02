(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('MainController', function (BikeProductsService, $scope) {
        var mainCtrl = this; // the scope of our controller is 'this'

        mainCtrl.products = BikeProductsService.getProducts();

        mainCtrl.product = BikeProductsService.getProduct();

        mainCtrl.cartProducts = BikeProductsService.getCartProducts();

        mainCtrl.buyItem = function(product){
          BikeProductsService.buyItem(product);
        };

        mainCtrl.addProduct = function (newProduct) {
          BikeProductsService.addProduct(newProduct);
          $scope.newProduct = {};
        };

        mainCtrl.deleteProduct = function(product) {
          BikeProductsService.deleteProduct(product);
        };

        mainCtrl.editProduct = function(product, idx) {
          BikeProductsService.editProduct(product, idx);
          $scope.newProduct = {};
        };

        mainCtrl.deleteCProduct = function (product) {
          BikeProductsService.deleteCProduct(product);
        };

    });

})();
