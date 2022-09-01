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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  //   .textcontent = 0

  // for the functionality of sort button in application
  // here we do want want to change the original array therfore we are using slice method
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displasyMovements(account1.movements);

console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  // acc.balance = balance;
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

//***********************************************************************************//

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income}€`;

  const outIncome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outIncome)}€`;

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${intrest}€`;
};
// calcDisplaySummary(account1.movements);

//***********************************************************************************//

const createUserNames = function (accs) {
  // we are not returning here as we are jst doing some side effects ...we are jst doing some work here
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};
createUserNames(accounts);
console.log(accounts);

//***********************************************************************************//

// 018_implementing login

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// EVENT HANDLER

let currentAccount;

// what all things shold happen when we login
btnLogin.addEventListener("click", function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // when the entered pin matches the set pin then it gets loged in
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display ui and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    // showing the content
    containerApp.style.opacity = 100;

    // clearing input fields
    inputLoginUsername.value = inputLoginPin.value = "";

    inputLoginPin.blur(); //this get rid of the blinking cursor in this field

    // update UI
    updateUI(currentAccount);
  }
});

// 019_implementing transfers

// for transfering money
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, recieverAcc);

  // condition of money transfer -->        1.amt transfered should not be negative   2.reciever account should aslo exists      3. transfered amt shold not be greated than current amt                          4.should not be transfered to the same/own account
  // ?. ----> optional chaining that returns undefined if reciever acc is not found

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    // updating the ui here
    updateUI(currentAccount);
  }
  // we are doing it outside if block as it does'nt matter if the transfer is completed or not it should be cleared
  inputTransferTo.value = "";
  inputTransferAmount.value = "";
  inputTransferAmount.blur();
});

// 020_findIndex method

// for closing a bank account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  // const userConfirm = accounts.find(acc => acc.username === inputCloseUsername.value) ;

  // const pinConfirm = Number(acc)
  // checking the conditions --->           1.if the user name is correct             2.if the entered pin is correct

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);

    // hiding the UI
    containerApp.style.opacity = 0;

    // labelWelcome.
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

// 021_some
// EQUALITY
console.log(movements.includes(-130));

// CONDITION (here we are giving a condition)
console.log(movements.some(mov => mov === -130));
const anyDeposites = movements.some(mov => mov > 1500);

console.log(anyDeposites); //true --ie. we have more than one deposites here

// now implementing loan functionality
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// it is a variable that keeps a check that wether the entries are sorted or not
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
  // by using this we can change the variable from true to false nd false to true each tym we click on the sort button
});

//***********************************************************************************//
//***********************************************************************************//
//***********************************************************************************//

// 021_EVERY
// returns true if all the elements satisfies the conditipn
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// FLAT METHOD
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

const addAll = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => mov + acc, 0);

console.log(addAll);

// flatmap --> only goes one level deep
const addAll2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => mov + acc, 0);

console.log(addAll2);

// 023_sorting arrays

// strings
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
x.fill(1, 3, 5);
console.log(x);

// fill(the value with witch u want to fill , the starting index , the ending index(not included))
arry.fill(34, 4, 6);
console.log(arry);

// Array here is a function and we are calling and then on this fn. object we call the from method

// --------------kaamm smjj ayaaa h yehh--------
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
// here _ = cur
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener("click", function () {
  // querySelectorAll returns a node list , to convert it into an array we use array.from nd then we includes a map fn to change the arry the way we wanted
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    ele => Number(ele.textContent.replace("€", ""))
  );
  console.log(movementsUI);
  // or we could do like this
  // const movementsUI2 = [...document.querySelectorAll(".movements__value")];
});

// 026_Array method practice

// const bankDepositeSum = accounts.map(acc => acc.movements).flat();
const bankDepositeSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);

console.log(bankDepositeSum);

// 2.
// const numDeposites1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposites1000);

const numDeposites1000 = accounts
  .flatMap(acc => acc.movements)
  // here we r using reduce to count the elements
  .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);

// .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
// "++ does'nt work we have to do ++count"

console.log(numDeposites1000);

// prefix ++ operator
let a = 9;
console.log(++a);

// 3.

// goal is to create an object
const { deposits, withdrawl } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposits += curr) : (sums.withdrawl += curr);
      sums[curr > 0 ? "deposits" : "withdrawl"] += curr;
      // we need to return the accumulater
      return sums;
    },
    { deposits: 0, withdrawl: 0 }
  );

console.log(deposits, withdrawl);

// 4.
// this is a nice title --> This Is a Nice Title

const converttitleCase = function (title) {
  const capitilize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map(word =>
      // if a current word is included in the exceptions array then return that word
      exceptions.includes(word) ? word : capitilize(word)
    )
    .join(" ");

  // 👇we did this becoz the first letter and is starting with small letter so to fix it we did this
  return capitilize(titleCase);
};
console.log(converttitleCase("this is a nice title"));
console.log(converttitleCase("this is a LONG TITLE but not too long"));
console.log(converttitleCase("and here is another title with an EXAMPLE"));
