var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;

module.exports = {
    inventory: data.inventory,
    shoppingCart: data.shoppingCart,
    addItem: function(itemId, quantity){
        // Your code here!
    },
    removeItem: function(itemId, quantity){
        // Your code here!
    },
    getCheckoutSubtotal: function(){
        var checkoutSubtotal = 0.00;
        // Your code here!
        return checkoutSubtotal;
    },
    getTax: function(subtotal, rate){
        var tax = 0.00;
        // Your code here!
        return tax;
    },
    getCheckoutTotal: function(){
        var TAX_RATE = 0.078;
        var checkoutTotal = 0.00;
        // Your code here!
        return checkoutTotal;
    }
}
