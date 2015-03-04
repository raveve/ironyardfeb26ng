(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('AdminController', function (AdminService, $scope, $location, $routeParams) {
        var adminCtrl = this;

        adminCtrl.products = AdminService.getProducts();

        adminCtrl.product = AdminService.getProduct($routeParams.productIndex);

        adminCtrl.addProduct = function (newProduct) {
          AdminService.addProduct(newProduct);
          $scope.newProduct = {};
          $location.path('/admin');
        };

        adminCtrl.deleteProduct = function (product) {
          AdminService.deleteProduct(product);
        };

        adminCtrl.editProduct = function (product) {
         AdminService.editProduct(product, $routeParams.productIndex);
         $location.path('/admin');
       };

    });

})();
