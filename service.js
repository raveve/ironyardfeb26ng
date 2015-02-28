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

      var deleteBikeProduct = function(product){
              var idx = bikeProducts.indexOf(product);
              // console.log(idx);
              bikeProducts.splice(idx, 1);
      }

      return {
        getProducts: getBikeProducts,
        addProduct: addBikeProduct,
        deleteProduct: deleteBikeProduct
        //left side is public api side and right side is private
      };
    });

})();
