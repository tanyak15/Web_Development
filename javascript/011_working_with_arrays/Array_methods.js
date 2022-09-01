"use script";

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//   const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//***********************************************************************************//

let arr = ["a", " b", "c", "d", "e"];

// SLICE -- it does'nt mutates the original array

console.log(arr.slice(2));
console.log(arr.slice(1, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log([...arr]);
console.log(arr.slice());

// SPLICE -- it mutates the original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); //here 1 is the index from where we have to start , and 2 is the no. of elements to be removed
console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

//reverse mutates the original array
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
// it does'nt mutate the original array here
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //spread operator

// JOIN

console.log(letters.join("-"));

//***********************************************************************************//

// Looping for each loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

// for each method call the  call back function in every iteration
console.log("-----FOR EACH-----");
//  parameter sequence:(first element ,index,nd array)
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement} `);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
});
// REMEMBER : YOU CANNOT BREAK OUT OF A FOR EACH LOOP (i.e no break or continue statement work inside the for each loop)
// 0 : Function(200)
// 0 : Function(450)
// 0 : Function(400)
// ...

// for_each with maps and sets
// MAPS
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (values, key, map) {
  console.log(values);
});

// SETS

const currenciesUnique = new Set(["USD", "EUR", "USD", "GBP", "GBP"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
});

// here "_" is the throwback parameter which does'nt mean anything

// FIND METHOD

// does;nt returns the array but returns the first element of an array which satisfies the condition

const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawl);

// filter methods returns all the elements(i.e an array ) that satisfies the condition
// while
// find methods only returns the first element (nd not an array)that satisfies the given condition

console.log(accounts);
const findAccount = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(findAccount);

// by using for of loop but not correct
// for (const acc of accounts) {
//   accounts.find(acc.owner === "Jessica Davis");
// }
// console.log(acc);
