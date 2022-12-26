// 004_exporting and importing modules
// Importing module

// 1. One way  (named imports)
// import {addToCart, totalPrice as price, tq} from './shoppintCart.js';
// addToCart('bread' ,5);
// console.log(price , tq);

console.log('Importing module');

// // 2. Second way
// import * as sc from './shoppintCart.js';
// sc.addToCart('popcorn' ,67);
// console.log(sc.totalPrice);


// default imports
import add from './shoppintCart.js';
add('pizza' , 5);

// named + default imports -- never do it
// import add , {addToCart, totalPrice as price, tq} from './shoppintCart.js';
// add('burger' , 5);
// console.log(price);

//*******************************************/

// 006_module pattern
// the data inside it is private

const shoppingCart2 = (function(){
const cart = [];
const shippingCart = 10;
const totalPrice = 237;
const totalQuantity = 23;

const addToCart = function(product , quantity){
    cart.push({product , quantity});
    console.log(`${quantity} ${product} added to (shipping cost is ${shippingCart})`);
}

const orderStock = function(product , quantity){
    
    console.log(`${quantity} ${product} ordered from supplier`);
}
// we will return an object that contains the data we want to make public
return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
}
})();

shoppingCart2.addToCart('coke' , 4);
shoppingCart2.addToCart('pasta' , 2);
console.log(shoppingCart2);

// 007commonJs module
// will not work here but will work in node js

// export.addToCart =  function(product , quantity){
//     cart.push({product , quantity});
//     console.log(`${quantity} ${product} added to cart`);
// }

// 09_intro to NPM
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
const state = {
    cart: [
      { product: 'bread', quantity: 5 },
      { product: 'pizza', quantity: 5 },
    ],
    user: { loggedIn: true },
  };
  const stateClone = Object.assign({}, state);
  const stateDeepClone = cloneDeep(state);
  state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);