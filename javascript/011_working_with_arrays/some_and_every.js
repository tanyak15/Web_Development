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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// CONDITION (here we are giving a condition)
// SOME -- returns true if any element satisfies the condition
console.log(movements.some(mov => mov === -130));
const anyDeposites = movements.some(mov => mov > 1500);

console.log(anyDeposites); //true --ie. we have more than one deposites here

// 021_EVERY
// returns true if all the elements satisfies the conditipn
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));
console.log("**********************");
// SEPERATE CALLBACK
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// FLAT METHOD --concatinates all the sub array to a specific depth
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat(1));

const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
console.log(arrDeep.flat(2));

const accountMovement = accounts.map(acc => acc.movements);
console.log(accountMovement);

const allMovements = accountMovement.flat();
console.log(allMovements);

// const addAll = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(addAll);

// flat
const addAll = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => mov + acc, 0);

console.log(addAll);

// flatmap -- it reduces flat and map to flatMap only
const addAll2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => mov + acc, 0);

console.log(addAll2);

// 023_sorting arrays

// strings
// SORT -- it mutates the array
const owners = ["Jonas", "Zack", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

// numbers
console.log(movements);
console.log(movements.sort()); //-->This compares the numbers as strings

// we do the sorting by using callback function
// return < 0 --> A , B (keep order)
// return > 0 --> B , A (switch order)

// 👇array is sorted in increasing order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// // prints the mutated arry of elements
// console.log(movements);

// improving the above array☝️ like this👇
movements.sort((a, b) => a - b);
// if a-b is positive then smthg positive returns or the otherways round
console.log(movements);

// 👇array is sorted in decreasing order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(movements);

// improving the above array☝️ like this👇
movements.sort((a, b) => b - a);
console.log(movements);

// 024_more ways of creating and filling arrays

const arry = [1, 2, 3, 4, 5, 6, 7];

// passing in numbers as arguments
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// it creates an empty arry of size 7
const x = new Array(7);
console.log(x);

// EMPTY ARRYS + FILL METHOD
// it mutates the arry nd fills the entire array with the given value
// x.fill(1);
x.fill(1, 3, 5); //at position 3 to 5(not encluded) fill 1
console.log(x);

// fill(the value with which u want to fill , the starting index , the ending index(not included))
arry.fill(34, 4, 6);
console.log(arry);

// Array here is a function and we are calling and then on this fn. object we call the from method

// --------------kaamm smjj ayaaa h yehh--------
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
// here _ = cur
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
