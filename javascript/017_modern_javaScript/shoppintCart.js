// Exporting module

console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// exports always happen in top level code
export const addToCart = function(product , quantity){
    cart.push({product , quantity});
    console.log(`${quantity} ${product} added to cart`);
}

// when we want to export multiple things we use - name exports

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice , totalQuantity as tq};

// Default module i.e when we want to import one thing per module

export default function(product , quantity){
    cart.push({product , quantity});
    console.log(`${quantity} ${product} added to cart`);
};