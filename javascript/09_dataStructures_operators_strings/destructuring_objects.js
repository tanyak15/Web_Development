"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDilevery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered  to ${address} at ${time}`
    );
  },
  orderDilevery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered  to ${address} at ${time}`
    );
  },
};

//object destructuring
// we use curly braces
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//giving different variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables in objects
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

// { a, b } = obj; this gives the error as it is starting from {} js expects it to be a code block
// so to solve the we warp the stattement into ()
({ a, b } = obj);
console.log(a, b);

//nested objects
// normal:👇
// const { fri } = openingHours;
// console.log(fri);

// nested obj:👇
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// nested obj and to give different variable names:👇
const {
  fri: { open: O, close: C },
} = openingHours;
console.log(O, C);

//destructuring a function
//whwn we are given all the values
restaurant.orderDilevery({
  time: "22:30",
  address: "21 ,via de sol",
  mainIndex: 2,
  starterIndex: 3,
});

//when we want to use the default values
restaurant.orderDilevery({
  address: "21 ,via de sol",
  starterIndex: 1,
});
