(function () {
  "use strict";

  angular.module('peddlerApp')
    .factory('BikeCartService', function () {
      var cartProducts =  [

      ];

      var getCartProducts = function () {
        return cartProducts;
      }

      var getCartProduct = function (product) {
        var idx = bikeProducts.indexOf(product);
        var bikeProduct = bikeProducts[idx];
        return bikeProduct;
      }

      var addCartProduct = function (product) {
        bikeProduct.push(product);
      }

      var deleteCartProduct = function(product) {
        var idx = cartProducts.indexOf(product);
        cartProducts.splice(idx, 1);
      }

      var editCartProduct = function(product) {
        var idx = cartProducts.indexOf(product);
        var selectedProduct = product;
      }

      return {
        cartProducts: getCartProducts,
        cartProduct: getCartProduct,
        addCartProd: addCartProduct,
        deleteCartProd: deleteCartProduct,
        editCartProd: editCartProduct
      };
    });

})();
