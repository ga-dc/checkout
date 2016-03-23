// add shopping cart to app, then add methods to shopping cart
app.shoppingCart = {
  initialize: function(){
    console.log("Initializing shoppingCart ");
    // start with no items
    this.items = [];
  },

  addItem: function(name, price, weight, size){
    this.items.push({ name: name, price: price, weight: weight, size: size });
  },

  calculateShipping: function(item){
    var shipping = 0;
    var weight = item.weight || 5;
    if(weight < 5){
      shipping += 0;
    } else if(weight < 50){
      shipping += 5;
    } else {
      shipping += 10
    }

    switch(item.size){
      case "small":
        shipping += 0;
        break;
      case "large":
        shipping += 50;
        break;
      case "ludicrous":
        shipping += 2550;
        break;
      default:
        throw(new Error("Unsupported size: " + item.size));
    }
    return shipping;
  },

  subtotal: function(){
    var cost = 0.00;
    this.items.forEach(function(item){
      cost = cost + item.price;
    })
    return cost;
  },

  totalCost: function() {
    return this.subtotal() + this.totalShipping();
  },

  totalShipping: function() {
    var shipping = 0.00;
    var self = this;
    this.items.forEach(function(item){
      shipping = shipping + self.calculateShipping(item);
    })
    return shipping;
  },

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// You do not need to change any code in the render() function.
  render: function(){
    // display the items on the page
    // by appending all items to the ul element (whose "id" is "items")
    var itemsContainer = document.getElementById('items');

    this.items.forEach(function(item){
      var itemLi = document.createElement('li');
      var itemText = document.createTextNode("Name: " + item.name + " | Price: " + accounting.formatMoney(item.price));
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
