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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is ur delecious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  //    console.log(`${item[0] + 1} : ${item[1]} `);
}
for (const [i, el] of menu.entries()) {
  //by using destructuring
  console.log(`${i + 1} : ${el} `);
}
// console.log([...menu.entries()]);
