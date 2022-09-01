// "use strict";
// const Bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 100 * numPassengers
// ) {
//   // using short circuiting - we are defining the default values && old way ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || "100$";

//   // In ES6 we do --> const createBooking = function (flightNum, numPassengers =1, price =199)

//   const booking = { flightNum, numPassengers, price };
//   console.log(booking);
//   Bookings.push(booking);
// };
// createBooking("11A5");
// createBooking("11A5", 25, 2000);
// createBooking("11A5", 3);
// createBooking("11A5", 7);
// createBooking("11A5", undefined, 800);

// //***********************************************************************************//

// const flight = "AR123";
// const jonas = {
//   name: "Tanya khandelwal",
//   passport: 12468900742,
// };
// const checkIn = function (flightNum, passengers) {
//   flightNum = "AR678";
//   passengers.name = "MRS." + passengers.name;
//   //   since this is a obj and not a primitive therefore can be changed

//   // if (passengers.passport === 12468900742) {
//   //   alert("checked in!");
//   // } else {
//   //   alert("wrong passport!");
//   // }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // passing a premitive type to a number is same as creating a copy as thos outside the function
// const flightNum = flight;
// const passengers = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
// //***********************************************************************************//
// // firstclass and higher order functions
// // copy

// //***********************************************************************************//
// // 07_functions accepting callback functions

// const oneword = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
//   //   " / /g is to replace all the matches of the doc nd not just one for eg:/_/g , " " to replace all with _"
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transforme = function (str, fn) {
//   console.log(`Original string: ${str}`); //---- */
//   console.log(`Transformed string : ${fn(str)};`);

//   console.log(`transformed by : ${fn.name}`);
// };

// transforme("Javascript is the best!", upperFirstWord);
// // upperFirstWord is the callback function

// transforme("Javascript is the best!", oneword);

// // we cannot do it like this as fn is not a function in transforme
// // transforme("Javascript is the best!", oneword());

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log("🎉🎉");
// };
// document.addEventListener("click", high5);

// ["jonas", "marths", "adam"].forEach(high5);

// 08_functions returning functions

// one fn returning another fn
const greet = function (greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
};

// to call one fn and store its value in a variable and then using y=that variable call next fn like this👇
const greaterHey = greet("Hey");
greaterHey("jonas");
greaterHey("steven");

// to call both fns at once we do like this👇
greet("hello")("michael");

// challenge - write using arror fn
// one arrow fn returning another arror fn
const greet1 = greetings1 => name1 => console.log(`${greetings1} ${name1}`);

greet1("holaa!")("peeps");

// 08_the call and apply methods

const lufthansa = {
  airline: "Lufthansa",
  itaCode: "LH",
  bookings: [],
  // book : function(){  }   now instead of doing like this to define a method we use this enhanced method.👇

  // enhanced method to define a method👇
  book(flightNum, name) {
    // this keyword here points to the lufthansa obj
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.itaCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.itaCode}${flightNum}`, name });
  },
};
lufthansa.book("234", "John wick");
lufthansa.book("786", "Dan Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  itaCode: "EW",
  bookings: [],
};

// now this book is gonna be the new function as lufthansa.book is a function
const book = lufthansa.book;

// now this keyword in this will point to undefined as this is jst a copy of book method ☝️
// book("67", "Sarah Williams");

// now to resolve this we have 3 methods called 'call, apply and bind methods'

//***********************************************************************************//

//  CALL METHOD

// REMEMBER :  a fn is really jst an object and objects have methods and so functions can have methods too
// here call method will call the book fn and this keyword set to eurowings
// this allows us to manually and explicitly set the this keyword to any fn
// call(this , and same as the methods arguments)
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 23, "Mary Copper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air lines",
  itaCode: "SW",
  bookings: [],
};

book.call(swiss, 324, "Serina Williams");
console.log(swiss);

// APPLY METHOD
const flightData = [546, "George Copper"];
book.apply(swiss, flightData);
console.log(swiss);

// ☝️this apply method is not used in morden js as we use 👇 (i.e call method with spread operator to spread out the elements of array)
book.call(swiss, ...flightData);

//***********************************************************************************//

// 09 _ BIND METHOD
// it mearly does not call the function instead it returns a new function where the this keyword is bound . so it sets to whatever value we pass in bind

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSA = book.bind(swiss);
bookEW(43, "Alice Will");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Serina Quill");

// WITH EVENT LISTNERS
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// PARTIAL APPLICATION means we can reset parameteres

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT =  value => value + value * 0.23;

console.log(addVAT(100));

// CHALLENGE
const addTaxRate = function (rate) {
  return function (value) {
    console.log(`${value + value * rate}`);
  };
};
// THIS
const addVat2 = addTaxRate(0.23);
addVat2(100);
// OR THIS
addTaxRate(0.23)(100);
