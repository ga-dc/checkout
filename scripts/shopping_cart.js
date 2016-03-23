// add shopping cart to app, then add methods to shopping cart
app.shoppingCart = {
  initialize: function(){
    console.log("Initializing shoppingCart ");
    // start with an empty Array of items
    this.items = [];
  },

  addItem: function(name, cost, weight, size, category){
    this.items.push({ "name": name, "cost": cost, "weight": weight, "size": size, "category": category });
  },

  calculateShipping: function(items){
    var shipping = 0;
    var weight = 5;
    if(weight < 50){
      shipping += 5;
    } else {
      shipping += 10;
    }

//I'm running into an error with line 24 that I can't solve!!
//TypeError: cannot read proptery 'size' of undefined
    switch(items.size){
      case "large":
        shipping += 50;
        break;
      case "ludicrous":
        shipping += 2550;
        break;
      default:
        throw new Error("Unsupported size " + items.size );
    }
    return shipping;
  },

  subtotal: function(){
    var cost = 0;
    this.items.forEach(function(items, index){
      cost = cost + items.cost;
    });
    return cost;
  },

  totalCost: function() {
    return subtotal + totalShipping();
  },

  totalShipping: function() {
    var shipping = 100.00;
    var self = this; // do not change. This line is needed for call to calculateShipping below
    this.items.forEach(function(item){
      shipping = shipping + self.calculateShipping();
    });
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
