// add shopping cart to app, then add methods to shopping cart
app.shoppingCart = {
  initialize: function(){
    console.log("Initializing shoppingCart ");
    // start with an empty Array of items
    this.items = [];
  },

  addItem: function(name, price, weight, size){
    this.items.push({name: name, price: price, weight: weight, size: size});
  },

  calculateShipping: function(item){
    var shipping = 0;
    var weight = item.weight;
    if(weight < 50){
      shipping += 5;
    } else {
      shipping += 10
    }

    switch(item.size){
      case "large":
        shipping += 50;
        break;
      case "ludicrous":
        shipping += 2550;
        break;
      case "small":
        shipping += 0;
        break;
      default:
        throw(new Error("Unsupported size: " + item.size));
    }
    return shipping;
  },

  subtotal: function(){
    var price = 0;
    this.items.forEach(function(item){
      price += item.price;
    })
    return price;
  },

  totalCost: function() {
    return this.subtotal() + this.totalShipping();
  },

  totalShipping: function() {
    var shipping = 100.00;
    var self = this; // do not change. This line is needed for call to calculateShipping below
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
