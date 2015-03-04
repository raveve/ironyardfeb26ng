(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('ProductsController', function (ProductsService, $scope, $location, $routeParams) {
        var prodCtrl = this; // the scope of our controller is 'this'

        prodCtrl.products = ProductsService.getProducts();

        prodCtrl.reviews = ProductsService.getReviews();

        prodCtrl.product = ProductsService.getProduct($routeParams.productIndex);

        prodCtrl.go = function (index) {
          $location.path('/fullview/' + index);
        };

        prodCtrl.buyItem = function (product) {
          ProductsService.buyItem(product);
        };

        prodCtrl.addReview = function (newReview, product) {
          ProductsService.addReview(newReview, product);
          $scope.newReview = {};
        }

    });

})();
