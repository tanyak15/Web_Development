"use strict";

let age = 20;
let oldage = age;
age = 21;
console.log(age);
console.log(oldage);

//creating object of me
const me = {
  name: "Jonas",
  age: 24,
};

const friend = me;
friend.age = 28;

console.log("friend :", friend);
console.log("me : ", me);
