"use strict";

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

//012_OPTIONAL CHAINING

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//WITH OPTIONAL CHAINING : ?.
// this check the mon day property as it is jst before ?
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// Example
const days = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];
for (const day of days) {
  //   console.log(day);
  // if we want to use variable name as property name we need to use brackets notation eg 👇
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day} , we open at ${open}`);
}

//Methods

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// its gives teh zeroth and first element of order fn

console.log(restaurant.orderRissoto?.(0, 1) ?? "Method does not exist");
// in this it gives do not exist as fn do not exists

// ---------Arrays----------
const users = [{ name: "jonas", email: "hello@jinas.com" }];
// console.log(users[0]?.name ?? "user array empty");

// const users = [];
console.log(users[0]?.name ?? "User array empty");

//normal method for this
if (users.length > 0) console.log(users[0].name);
else console.log("User array empty");

// ------------------------------------------------------------------

// 013_LOOPING OBJECTS _ OBJ KEYS,VALUES AND ENTRIES

//Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days : `;

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//Property names
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key,value]
for (const [key, { open, close }] of entries) {
  //   console.log(x);
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

// ------------------------------------------------------------------

// coding challenge #2
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}

average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}
