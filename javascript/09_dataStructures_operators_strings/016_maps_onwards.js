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

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze , Italy");
console.log(rest.set(2, "Lisbon , Portugal"));

// set method returns the updated map
rest
  .set("categories", ["Italian", "PIzzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :)")
  .set(false, "we are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(2));
console.log(rest.get("categories"));

const time = 20;
// using boolean as map kese
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log("*************************");
console.log(rest.has("categories"));
rest.delete(2);
const arr = [1, 2];
rest.set(document.querySelector("h1"), "heading");
rest.set(arr, "Test");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
// see it again from last

// 017_Maps_iteration

// array of arrays
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "correct"],
  [false, "Try again!"],
]);
console.log(question);

// convert object into a map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours)); //this obj here is iterable

console.log(hoursMap);

// quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
}
// const answer = Number(prompt("Your answer"));
// console.log(answer);

// console.log(question.get(question.get("Correct") === answer));

// convert map to array
console.log(...question);

// console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());

// SUMMARY_WHICH DATA STRUCTURES TO USE i.e arrays ,maps ,sets ,object

// Coding challenge
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// const eve = [...gameEvents.values()];
// console.log(eve);
// const events = new Set(eve);

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);

const time1 = [...gameEvents.keys()].pop();
console.log(time1);
console.log(`An event happened, on
average, every ${time1 / gameEvents.size} minutes`);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min} : ${event}`);
}
