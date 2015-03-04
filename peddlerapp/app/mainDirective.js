(function () {
  "use strict";
  angular.module('ng-modules')
    .directive('test-Directive', function () {
      return {
        // template: '<div><h1>{{title}}</h1><ng-transclude></ng-transclude></div>', put this line n the below file
        restrict: 'E', // E = element, A = attribute,  C = class
        scope: {
          title: '@' // @ - data can come in, = - data is 2-way, & - expression or function
        },
        templateUrl: 'common/views/myDirective.html',
        transclude: false, // Can be either true or false
        replace: true
      },
      link: function (scope, element, attributes) {
        element.on('click', function (event) {
          event.preventDefault();
          alert("hi there");
        })
      }
    });
})();

<product ng-repeat="product in admin.products" title="{{product.title}}" photo="{{product.photo}}" price="{{product.price}}">



// <test-directive title></test-directive>
