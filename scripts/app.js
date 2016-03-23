
"use strict"

var app = {};

app.initialize = function(){
  console.log("Starting app...");
  app.shoppingCart.initialize();
  app.shoppingCart.addItem("EloquentJavascript", 20.00, 2, "small", "book");
  app.shoppingCart.addItem("Raspberry Pi", 35.50, 2, "small", "electronics");
  app.shoppingCart.addItem("Trampoline", 339.50, 40, "large", "exercise");
  app.shoppingCart.addItem("Tesla X1", 79900.00, 5100, "ludicrous", "vehicle")

  app.shoppingCart.render();
}

// ensure DOM is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  app.initialize();
});
