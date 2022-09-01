"use script";

const weekdays = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];
// changes here
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //   [`day-${4 + 2}`]: {
  //     open: 0, //open 24 hours
  //     close: 24,
  //   },
  [weekdays[5]]: {
    open: 0, //open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //object litral
  //   openingHours: openingHours,

  //ES6 inhanced object litrals
  openingHours,

  //   older syntax
  //   order: function (starterIndex, mainIndex) {
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   },

  //changes here ;
  // new and easy way to write it
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //functions/methods syntax is abc()
  orderDilevery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered  to ${address} at ${time}`
    );
  },
  orderDilevery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered  to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is ur delecious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// ------------------------------------------------------------------

//015_SETS
//sets are also iterables
// 1.order is irrelevent in a set
// 2.elements are unique

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);
console.log(orderSet.size);

// strings are also iterable
console.log(new Set("Jonas"));

console.log(orderSet.has("Pizza"));
console.log(orderSet.has("bread"));

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
// orderSet.clear();
console.log(orderSet);

// Looping is possible
for (const order of orderSet) console.log(order);

// how can be retreve things out of a set - WE CAN'T AS IN A SET THE ELEMENTS ARE NOT STORED IN ANY PARTICULAR ORDER THEFORE NO POINTOF RETRIVING IT -----`IF U NEED TO RETRIVE VALUES USE ARRAYS`
// console.log(orderSet[0]); WRONG SYNTAX

// Example
// converting staff array into staffUnique set by using new Set() function
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
console.log(staff);
// const staffUnique = new Set(staff); // this is a set
const staffUnique = [...new Set(staff)]; // we can unpack this entire set here using spread ope. and then these elements will me put into a newly constructed array
console.log(staffUnique);
// console.log(staffUnique.length);  //here used .length ,since , we converted it into an array
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("tanyakhandelwal").size); //this will give how many different letters are there in my name
