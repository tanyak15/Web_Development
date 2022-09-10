"use script";
// --------------map--------------

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// functional programming
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// using arrow function
const arrowMovements = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(arrowMovements);
// console.log(movementsUSD);

const movementUSDfor = [];
for (const mov of movements) {
  movementUSDfor.push(mov * eurToUsd);
}
console.log(movementUSDfor);

const movDescription = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movDescription);

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

const user = "Steven Thomas Williams";

const createUserNames = function (user) {
  const username = user
    .toLowerCase()
    .split(" ")
    //   .map(function (name) {
    //     return name[0];
    //   }
    //   OR
    // using arrow function
    .map(name => name[0])
    .join("");
  return username;
};

console.log(createUserNames("Sarah Smith"));

const createUserNames1 = function (accs) {
  // we are not returning here as we are jst doing some side effects ...we are jst doing some work here
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};

createUserNames1(accounts);
console.log(accounts);

// FILTER METHOD

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);
const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);

// REDUCE METHOD
console.log("******************");
console.log(movements);

// ACCUMULATOR --> snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + cur;
// }, 0); //0 is the initial value of the accumulator
// console.log(balance);

// now using arror function
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

// now with a for loop
let balance2 = 0;
for (const bal of movements) {
  balance2 += bal;
}

console.log(balance2);

// MAXIMUM VALUE
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);
