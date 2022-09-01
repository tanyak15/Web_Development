"use script";

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
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//used spresd operator (...)
const newArr = [1, 2, ...arr];
console.log(newArr);
// output : [1,2,7,8,9]

// this will give us all the elements seperately
console.log(...newArr);
//output : 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, "sizzler"];
console.log(newMenu);

//IMP : spread operator takes all the new elements and also it doesn't create new variables ..therfore we can only use it in the places seperated by commas

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables : arrays ,strings,maps ,sets but NOT objects

const str = "jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt("let's make pasta! ingredient 1?"),
  prompt("ingredient 2?"),
  prompt("ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//spread operator works on objects also  (and they are also not iterable)
//objects

const newRestaurant = { foundedIn: 1995, ...restaurant, founder: "guisseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
