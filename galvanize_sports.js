var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;

module.exports = {
    inventory: data.inventory,
    shoppingCart: data.shoppingCart,
    addItem: function(itemId, quantity){
        // Your code here!
        for (var i = 0; i < inventory.length; i++) {
          if(inventory[i].id === parseInt(itemId)){
            if(quantity <= inventory[i].quantityAvailable){

              inventory[i].quantityAvailable -= parseInt(quantity);

              shoppingCart[i].quantity += parseInt(quantity);

            } else {

              shoppingCart[i].quantity += inventory[i].quantityAvailable;

              //reduce inventory to 0
              inventory[i].quantityAvailable = 0;

            }
          }
        }
    },
    removeItem: function(itemId, quantity){
        // Your code here!

        for (var i = 0; i < shoppingCart.length; i++) {
          if(inventory[i].id === parseInt(itemId)){
            if(quantity <= shoppingCart[i].quantity){

              inventory[i].quantityAvailable += parseInt(quantity);

              shoppingCart[i].quantity -= parseInt(quantity);

            } else {

                inventory[i].quantityAvailable += shoppingCart[i].quantity;

                shoppingCart[i].quantity = 0;
            }
          }
        }
    },
    getCheckoutSubtotal: function(){
        var checkoutSubtotal = 0.00;
        // Your code here!
        for (var i = 0; i < shoppingCart.length; i++){
            var cost = inventory[i].price * shoppingCart[i].quantity;

            checkoutSubtotal += cost;
        }

        return checkoutSubtotal;
    },
    getTax: function(subtotal, rate){
        var tax = 0.00;

        tax = subtotal * rate;

        return tax;
    },
    getCheckoutTotal: function(){
        var TAX_RATE = 0.078;
        var checkoutTotal = 0.00;
        var checkoutSubtotal = 0.00;

        for (var i = 0; i < shoppingCart.length; i++){
            var cost = inventory[i].price * shoppingCart[i].quantity;

            checkoutSubtotal += cost;
        }

        //calculate the total costs
        checkoutTotal = (checkoutSubtotal * TAX_RATE + checkoutSubtotal);

        //reduce decimals
        checkoutTotal = checkoutTotal.toFixed(2);

        return checkoutTotal;
    }
}
