"use strict";
// console.log("tanya");
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // here this keyword will only point to the global scope i.e windows
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
//here this keyword is working on jonas becoz in line 26 we have called jonas.calcAge
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
//this function w
matilda.calcAge();

const f = jonas.calcAge;
f();
