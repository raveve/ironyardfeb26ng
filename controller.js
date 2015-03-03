(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('MainController', function (BikeProductsService, $scope, $location, $routeParams) {
        var mainCtrl = this; // the scope of our controller is 'this'

        mainCtrl.products = BikeProductsService.getProducts();

        mainCtrl.reviews = BikeProductsService.getReviews();

        // $scope.$on('product:deleted', function() {}

        // .success(function(data) {
        //   main.products = data;
        // })

        //ProductService.getSingleProduct($routeParams.productID).success(function(data) {
          //   admin.singleProduct = data;
          // });

        mainCtrl.product = BikeProductsService.getProduct($routeParams.productIndex);
        console.log(mainCtrl.product);
          mainCtrl.go = function (index) {
            $location.path('/fullview/' + index)
          }

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

        mainCtrl.addReview = function (newReview, product) {
          BikeProductsService.addReview(newReview, product);
          $scope.newReview = {};
        }

        mainCtrl.deleteProduct = function (product) {  //make product id on both lines
          BikeProductsService.deleteProduct(product);
          $location.path("/cart");
        };

        mainCtrl.editProduct = function (product) {
         BikeProductsService.editProduct(product, $routeParams.productIndex);
         $location.path('/admin');
       };

        mainCtrl.deleteCProduct = function (product) {
          BikeProductsService.deleteCProduct(product);
          mainCtrl.totalPrice = BikeProductsService.getCartPrice();
        };

        mainCtrl.login = function (userName) {
          if(userName === "raven") {
            $location.path('/admin');
          }
        };

    });

})();
