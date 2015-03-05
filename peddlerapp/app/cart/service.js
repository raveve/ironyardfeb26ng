(function () {
  "use strict";

  angular.module('peddlerApp')
    .factory('CartService', function ($http, $rootScope) {

      var url = "http://tiy-fee-rest.herokuapp.com/collections/peddlerapp";

      var cartProducts =  [

      ];


      var totalPrice = 0;

      var getBikeProducts = function () {
        return $http.get(url);
      }

      var getBikeProduct = function (id) {
        return $http.get(url + '/' + id);
      }

      var buyBikeItem = function(product) {
        cartProducts.push(product);
        cartTotalPrice();
      }

      var getCart = function() {
        return cartProducts;
      }

      var deleteCartProduct = function(product) {
        var idx = cartProducts.indexOf(product);
        cartProducts.splice(idx, 1);
        totalPrice=cartTotalPrice();
        console.log(totalPrice);
      }

      var getCartPrice = function(){
        return totalPrice;
      }

      var cartTotalPrice = function() {
        totalPrice = 0;
        if (cartProducts.length > 0) {
          for (var i = 0; i < cartProducts.length; i++) {
            totalPrice += +cartProducts[i].price;
          }
        }
        return totalPrice;
      }


      // * product[i].quantity

      return {
        getProducts: getBikeProducts,
        getProduct: getBikeProduct,
        buyItem: buyBikeItem,
        getCartProducts: getCart,
        deleteCProduct: deleteCartProduct,
        cartTotal: cartTotalPrice,
        getCartPrice: getCartPrice
      };
    });

})();
