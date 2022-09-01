console.log(me);
// console.log(job);
// console.log(year);

var me = "tanya";
let job = "programmer";
const year = 1990;

// Example---------
if (!noProducts) deleteShoppingCart(); //gives the output as noProducts is not declared therefor it is undefined i.e. false

var noProducts = 10;

function deleteShoppingCart() {
  console.log("All items are deleted!");
}

//example 2--------------
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
