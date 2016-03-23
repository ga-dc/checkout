"use strict"

var app = {};

app.initialize = function(){
  console.log("Starting app...");
  app.shoppingCart.initialize();
  app.shoppingCart.initialize("EloquentJavascript", 20.00, 2, "small", "book");
  app.shoppingCart.initialize("Raspberry Pi", 35.50, 2, "small", "electronics");
  app.shoppingCart.initialize("Trampoline", 339.50, 40, "large", "exercise");
  app.shoppingCart.initialize("Tesla X1", 79900.00, 5100, "ludicrous", "vehicle")

  app.shoppingCart.render();
}

// ensure DOM is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  app.initialize();
});
