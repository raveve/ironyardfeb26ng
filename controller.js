(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('MainController', function (BikeProductsService, $scope, $location) {
        var mainCtrl = this; // the scope of our controller is 'this'

        mainCtrl.products = BikeProductsService.getProducts();

        mainCtrl.product = BikeProductsService.getProduct();

        mainCtrl.cartProducts = BikeProductsService.getCartProducts();

        mainCtrl.totalPrice = BikeProductsService.getCartPrice();

        mainCtrl.cartTotal = BikeProductsService.cartTotal();

        mainCtrl.buyItem = function (product) {
          BikeProductsService.buyItem(product);
        };

        mainCtrl.addProduct = function (newProduct) {
          BikeProductsService.addProduct(newProduct);
          $scope.newProduct = {};
        };

        mainCtrl.deleteProduct = function (product) {
          BikeProductsService.deleteProduct(product);
          $location.path("/cart");
        };

        mainCtrl.editProduct = function (product, idx) {
          BikeProductsService.editProduct(product, idx);
          $scope.newProduct = {};
        };

        mainCtrl.deleteCProduct = function (product) {
          BikeProductsService.deleteCProduct(product);
        };

        mainCtrl.login = function (username) {
          if(username === "raven") {
            $location.path('/admin');
          }
        };

    });

})();
