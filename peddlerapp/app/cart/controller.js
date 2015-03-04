(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('CartController', function (CartService, $scope, $location, $routeParams) {
        var cartCtrl = this; // the scope of our controller is 'this'

        cartCtrl.products = CartService.getProducts();

        cartCtrl.product = CartService.getProduct($routeParams.productIndex);

        cartCtrl.cartProducts = CartService.getCartProducts();

        cartCtrl.totalPrice = CartService.getCartPrice();

        cartCtrl.cartTotal = CartService.cartTotal();

        cartCtrl.buyItem = function (product) {
          CartService.buyItem(product);
        };

        cartCtrl.deleteCProduct = function (product) {
          CartService.deleteCProduct(product);
          cartCtrl.totalPrice = CartService.getCartPrice();
        };

    });

})();
