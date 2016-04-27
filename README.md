# Galvanize Sports

## Your Mission

Galvanize Sports is a small but growing online retailer. Their senior developer has written out the code for their inventory, as well as some function stubs for you to fill out. Write the code to add, remove, and total items for the web store.

For example, if a user calls `addItem(1, 1);`, the data should go from:

```js
{
    /* ... */
    id: 1,
    name: "Baseball Bat",
    price: 19.99,
    quantityAvailable: 3
    /* ... */
}
{
    /* ... */
    itemId: 1,
    quantity: 0
    /* ... */
}
```

to:

```js
{
    /* ... */
    id: 1,
    name: "Baseball Bat",
    price: 19.99,
    quantityAvailable: 2
    /* ... */
}
{
    /* ... */
    itemId: 1,
    quantity: 1
    /* ... */
}
```

If there the user adds more items than are available, you should add as many as you can. If the user tries to remove more items than are in the cart, you should remove as many as you can.

Additionally, calling `getCheckoutTotal()` should return the value of all of the items in the shopping cart, with a 7.8% tax, rounded to the nearest penny.


## Function Stubs

```js
addItem(itemId, quantity){
    /* Your code here- Look out for adding more items than are in inventory!

    */
    return true;
}
removeItem(itemId, quantity){
    /* Your code here- Look out for removing more items than are in the cart!

    */
    return true;
}
getCheckoutTotal(){
    var checkoutTotal = 0.00;
    /* Your code here

    */
    return checkOutTotal;
}
getCheckoutSubtotal(){
    var checkoutSubtotal = 0.00;
    /* Your code here

    */
    return checkOutSubtotal;
}
getTax(subtotal, rate){
    var taxAmount = 0.00;
    /* Your code here

    */
    return taxAmount;
}
```

## Data

```js
// Inventory
{
    inventory: [{
        id: 1,
        name: "Baseball Bat",
        price: 19.99,
        quantityAvailable: 3
    },{
        id: 2,
        name: "Tennis Racket",
        price: 50.00,
        quantityAvailable: 5
    },{
        id: 3,
        name: "Running Shoes",
        price: 79.99,
        quantityAvailable: 7
    }]
}
```

```js
// Shopping Cart
{
    shoppingCart: [{
        itemId: 1,
        quantity: 0
    },{
        itemId: 2,
        quantity: 0
    },{
        itemId: 3,
        quantity: 0
    }]
}
```
