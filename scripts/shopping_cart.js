// add shopping cart to app, then add methods to shopping cart
app.shoppingCart = {
  initialize: function(){
    console.log("Initializing shoppingCart ");
    // start with an empty Array of items
    this.items = [];
  },

  add_item: function(name, price){
    this.items.push([ "name", "cost", "weight", "size" ]);
  },

  calculateShipping: function(item){
    var shipping = 0;
    var weight = item.weight || 5;
    if (weight < 50){
      shipping += 5;
    }
    else {(weight > 50)
      shipping += 10;
    }

    switch(item.size){
      case "large":
        shipping += 50;
        break;
      case "ludicrous":
        shipping += 2550;
        break;
      default:
        throw(new Error("Unsupported size: " + item.size));
    }
    shipping;
  },

  subtotal: function(){
    this.items.forEach(function(item){
      subtotal = cost + item.cost;
    })
    return subtotal;
  },

  totalCost: function() {
    return subtotal + total_shipping();
  },

  totalShipping: function() {
    var shipping = 100.00;
    var self = this; // do not change. This line is needed for call to calculateShipping below
    this.items.forEach(function(item){
      totalShipping = shipping + self.calculateShipping();
    })
    return totalShipping;
  },

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// You do not need to change any code in the render() function.
  render: function(){
    // display the items on the page
    // by appending all items to the ul element (whose "id" is "items")
    var itemsContainer = document.getElementById('items');

    this.items.forEach(function(item){
      var itemLi = document.createElement('li');
      var itemText = document.createTextNode("Name: " + item.name + " | Price: " + accounting.formatMoney(item.cost));
      itemLi.appendChild(itemText); // e.g. <li>Name: Book | Price: 5.34</li>

      itemsContainer.appendChild(itemLi);
    });

    var subtotalElement = document.getElementById('subtotal');
    subtotalElement.textContent = accounting.formatMoney(app.shoppingCart.subtotal());

    var totalShippingElement = document.getElementById('total_shipping');
    totalShippingElement.textContent = accounting.formatMoney(app.shoppingCart.totalShipping());

    var totalCostElement = document.getElementById('total_cost');
    totalCostElement.textContent = accounting.formatMoney(app.shoppingCart.totalCost());

  }
};
