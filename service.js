(function () {
  "use strict";

  angular.module('peddlerApp')
    .factory('BikeProductsService', function () {
      var bikeProducts =  [
        {
          name: "",
          url: "",
          details: "",
          price: ""
        }
      ];

      var getBikeProducts = function () {
        return bikeProducts;
      }

      var addBikeProduct = function (product) {
        bikeProducts.push(product);
      }

      return {
        getProducts: getBikeProducts,
        addProduct: addBikeProduct
        //left side is public api side and right side is private
      };
    });

})();
