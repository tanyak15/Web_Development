"use strict";
var firstName = "bob";

const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    console.log("*******************************");

    //to access "this" keyword there are two ways:
    // 1. to create a seperate variable outside millenial fn⬇️

    // const self = this;
    // const isMillenial = function () {
    //   //old sol : inside this millenial function we do not have access to "this"
    //   console.log(self);
    //   console.log(self.year >= 1891 && self.year < 1998);
    //   //    console.log(this.year >= 1891 && this.year < 1998);
    // };

    //2. 2nd sol : to use the arrow fn as it will use the this keyword of its parent function i.e calcAge

    // an arrow fn inherits the this keyword from its parent scope

    const isMillenial = () => {
      // inside this millenial function we do not have access to "this"
      console.log(this);
      console.log(this.year >= 1891 && this.year < 1998);
    };

    isMillenial();
  },
  greet: () => console.log(`this is ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 4, 67, 23, 45);
// console.log(addExpr(2, 5));

var addArrow = (a, b) => {
  // arguments is not defined in an arror function
  console.log(arguments);
  return a + b;
};
consaddArrow(5, 10);
