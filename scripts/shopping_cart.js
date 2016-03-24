// add shopping cart to app, then add methods to shopping cart
app.shoppingCart = {
  initialize: function(){
    console.log('Initializing shoppingCart ');
    // start with an empty Array of items
    this.items = [];
  },

  addItem: function(name, cost, weight, size, kind){
    console.log("activate addItem function");
    this.items.push({ name: name, cost: cost, weight: weight, size: size, kind: kind });
  },

  calculateShipping: function(item){
    console.log("activate calculateShipping function");
    var shipping = 0;
    var weight = items.weight || 5;
    if(weight <= 5){
      shipping += 0;
    }
    else if (weight <= 50){
      shipping += 5;
    } else {
      shipping += 10;
    }

    switch(items.size){
      // Had to look up the solution for this.  I assumed
      // switch(items.size) would ignore sizes other than "large"
      // and "ludicrous" and wouldn't create a problem.  But, it's
      // here to make sure the product listings are correct... right?
      case "small":
        shipping += 0;
        break;
      case "medium":
        shipping += 0;
        break;
      case "large":
        shipping += 50;
        break;
      case "ludicrous":
        shipping += 2550;
        break;
      default:
        //throw(new Error("Unsupported size: " + items.size));
      // ^^^ This kept saying items.size was undefined, hence the comment-out.
      // Update: got it fixed.
    }
    return shipping;
  },

  subtotal: function(){
    console.log("activate subtotal function");
    var sub = 0.00;
    this.items.forEach(function(item){
      sub = sub + item.cost;
      console.log(sub);
    });
    return sub;
  },

  totalCost: function() {
    console.log("activate totalCost function");
    return this.subtotal() + this.totalShipping();
  },

  totalShipping: function() {
    console.log("activate totalShipping function");
    var totShipping = 100.00;
    var self = this; // do not change. This line is needed for call to calculateShipping below
    self.items.forEach(function(item){
      totShipping = totShipping + self.calculateShipping();
    });
    console.log(totShipping);
    return totShipping;
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
