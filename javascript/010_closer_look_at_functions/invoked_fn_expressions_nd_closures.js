// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();

// // immediately invoked function expression -- IIFE
// (function () {
//   console.log("This function will never run again");
//   const isPrivate = 34; // this data is incapsulated inside this function
// })();
// // console.log(isPrivate);

// (() => console.log("This function will also never run again"))();

// {
//   const isPrivate = 34;
//   var notPrivate = 67;
// }
// // console.log(isPrivate);
// console.log(notPrivate);

// // --------- CLOSURES ---------
// // a closure makes a fn remember all the variables at the functions birth place

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);
// // closures -- internal property that we cannot access

// // 013_more closure examples

// // EXAMPLE 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// // since we did'nt even define the f variable in theg scope but still it works ,,,,----this is because we made it a function and which is inside g function therfore we are able to access it

// const h = function () {
//   const b = 300;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f(); // a is inside the backpack of the f function

// console.dir(f);
// // re-assigned f function
// h();
// f();

// console.dir(f);

// // EXAMPLE 2

// const boardPassenders = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`will start boarding in ${wait} seconds`);
// };

// boardPassenders(180, 3);

// coding challenge #2

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
