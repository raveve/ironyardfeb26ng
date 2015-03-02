(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('CartController', function (BikeCartService, BikeProductsService, $scope) {
        var cartCtrl = this; // the scope of our controller is 'this'

        cartCtrl.products = BikeCartService.cartProducts();

        cartCtrl.product = BikeCartService.cartProduct();

        cartCtrl.addCartProd = function (Product, index) {
          BikeCartService.addCartProduct(Product, index);
        };

        cartCtrl.deleteCartProd = function(product) {
          BikeCartService.deleteProduct(product);
        };

        cartCtrl.editCartProd = function(product, index) {
          BikeCartService.editCartProduct(product, index);
          $scope.newProduct = {};
        };

    });

})();
