(function () {
  "use strict";

  angular.module('peddlerApp')
    .factory('CartService', function ($http, $rootScope) {

      var bikeProducts =  [
        {
          name: "Rainbow Allen Key Set",
          url: "http://store.desgena.com/prodotti/BLB_ACC_TOO_001_Rainbow-Allen-Key-Set.jpg",
          details: "Lets face it, every cyclist needs Hex (or Allen) keys. Multi tools are great for out and about, but when at home the extra length of a full Allen Key set is often a necessity. We offer all the useful attributes of an Allen Key set, but with the added bonus of a fantastic array of colours. Working on your bike doesn’t have to be grey, we know a colourful toolset will always make us smile.",
          price: "50.00",
          reviews: []
        },
        {
          name: "The Bird Cage water bottle holder",
          url: "http://cdn.shopify.com/s/files/1/0189/3426/products/pdw_birdcage_black_grande.jpg?v=1424091544",
          details: "Replace your boring old bottle cage with this fresh take on the H2O holder.  The Bird Cage is made of lightweight 5052 alloy in the shape of a bird with wings folded to cradle your water bottle.",
          price: "20.00",
          reviews: []
        },
        {
          name: "Leather Wine Rack",
          url: "https://img0.etsystatic.com/000/0/6042930/il_fullxfull.237642730.jpg",
          details: "This handmade tan leather bicycle wine rack is perfect for taking wine with you on the go. It easily attaches to most bike frames with antique brass fasteners, while the hidden clamps hold the bottle securely. Best of all, the olive oil-treated vegetable-tanned leather will only look better as it ages. Fits a 1\"-1.5\" bike frame. Adjustable to fit different types of 3″ bottles. Hidden clamping system keeps clamp firmly in place. Handmade in Montreal vegetable-tanned leather that will age beautifully",
          price: "35.00",
          reviews: []
        },
        {
          name: "Bicycle Camper Trailer with Tent Cot",
          url: "http://s3-us-west-1.amazonaws.com/static.brit.co/wp-content/uploads/2013/05/29-Bushtrekka.jpg",
          details: "Innovative and unique, the Midget Bushtrekka trailer from Kamp-Rite is perfect for the bicycle or camping enthusiast. The one-of-a-kind pivoting wheelset and alloy wheels make for a comfortable ride over most terrain; safety reflectors and safety tape offer nighttime visibility. And when you're finished trekking for the day, open up the included Oversized Tent Cot for a great night's rest!",
          price: "850.00",
          reviews: []
        }
      ];

      var cartProducts =  [

      ];

      var totalPrice = 0;

      var getBikeProducts = function () {
        return bikeProducts;
      }

      var getBikeProduct = function (index) {
        var bikeProduct = bikeProducts[index];
        return bikeProduct;
      }

      var buyBikeItem = function(product) {
        cartProducts.push(product);
        cartTotalPrice();
        console.log(cartProducts);
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
