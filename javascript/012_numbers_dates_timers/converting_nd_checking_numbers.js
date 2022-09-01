"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2022-08-16T17:01:17.194Z",
    "2022-08-17T23:36:17.929Z",
    "2022-08-19T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (24 * 60 * 60 * 1000));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year} `;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    // const formattedMov = new Intl.NumberFormat(acc.locale, {
    //   style: "currency",
    //   currency: acc.currency,
    // }).format(mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>  
    <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  // labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//***********************************************************************************//

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call ,print the renaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds , stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    // decrease 1 sec
    time--;
  };
  // set time to 5 min
  let time = 30;

  // call the timer every sec
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers

let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// -------------------------------------------------------------------------------------

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // ----working on dates-----
    // ----create current dates and time---

    // const day = `${Now.getDate()}`.padStart(2, 0);
    // const month = `${Now.getMonth() + 1}`.padStart(2, 0);
    // const year = Now.getFullYear();
    // const hours = `${Now.getHours()}`.padStart(2, 0);
    // const Minutes = `${Now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year} , ${hours}:${Minutes}`;
    // // day//month/year

    const Now = new Date();

    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      //   month: "long",    -->August
      //   month: "2-digit",   -->/08
      month: "numeric", //-->/08
      year: "numeric",
      //   year: "2-digit",    -->22
      //   weekday: "long",   --->Thursday
      //   weekday: "short",   -->sat
      //   weekday: "narrow",  -->S
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(Now);
    // use iso language code table on goggle

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // reset the timer (as there is some activity)
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
    // reset the timer (as there is some activity)
    clearInterval(timer);
    timer = startLogoutTimer();
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 == 23.0);
console.log(10 / 3);
// base 10 --> 0-9    , 1/10=0.1 , 10/3 =3.3333
// binary base 2 --> 0,1

console.log(0.1 + 0.3);
console.log(0.1 + 0.3 == 0.4);

// to convert strings to number
console.log(Number("34"));
console.log(+"34");

// parsing
console.log(Number.parseInt("20px"));
// ☝️gets rid of unnecessary digits i.e that are not numbers
console.log(Number.parseInt("e20")); //NaN

console.log(Number.parseInt("36.7rem")); // 36
console.log(Number.parseFloat("36.7rem")); //36.7

// console.log(parseFloat("36.7rem"));

// to check if value is not a number
console.log(Number.isNaN(20)); //F
console.log(Number.isNaN("20")); //F
console.log(Number.isNaN(+"20x")); //T
console.log(Number.isNaN(19 / 0)); //F

// checking if a value is  a number
console.log(Number.isFinite(23)); //T
console.log(Number.isFinite("23")); //F
console.log(Number.isFinite(67 / 0)); //f

console.log(Number.isInteger(40));
console.log(Number.isInteger(60.0));
console.log(Number.isInteger(60.6));
console.log(Number.isInteger(60 / 0));

// 04_MATH ND ROUNDING

// to fing the square root
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(27 ** (1 / 3)); //3

console.log(Math.max(23, 45, 56, 78)); //78
console.log(Math.max(23, 45, "156", 78)); //156 (does type coersion i.e converts the string into number)

console.log(Math.max(23, "45px", 56, 78)); //NaN

console.log(Math.min(23, 34, 56, 78));

console.log(Math.PI * Number.parseFloat("10p") ** 2);

console.log(Math.random()); //gives value b/w 0 and 1
console.log(Math.floor(Math.random() * 6) + 1); //values b/w 1 and 6

const randInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
// 0....1 --> 0...(max - min) --> min... (max - min + min)

console.log(randInt(10, 20));

// Rounding integers
console.log(Math.trunc(56.98)); //56

console.log(Math.round(23.7)); //24
console.log(Math.round(23.3)); //23
console.log(Math.round(23.5)); //24

console.log(Math.ceil(32.6)); //33
console.log(Math.ceil(32.1)); //33

console.log(Math.floor(87.6)); //87
console.log(Math.floor(87.1)); //87
console.log(Math.floor("87.1")); //87
// does type coersion

console.log(Math.trunc(-23.5)); //-23
console.log(Math.floor(-23.5)); //-24

// rounding decimals
console.log((2.7).toFixed(0)); //3
//toFixed returns a string and not a number
console.log((2.7).toFixed(1)); //2.7
console.log((2.7).toFixed(3)); //2.700

console.log((2.567).toFixed(2)); //2.57
console.log(+(2.567).toFixed(2)); //2.57(number)

// 05_remainder operator
console.log(5 % 2);
console.log(5 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(83));

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "pink";
    if (i % 3 === 0) row.style.backgroundColor = "purple";
  });
});

//***********************************************************************************//
// 06_working with bigInt

// highest number that js can save
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 4);

console.log(276354890364326378490356389n);
// when we write n then the number becomes bigInt
console.log(BigInt(276354890364326));

// operations
console.log(1000n + 1000n);
console.log(12345678098765432n * 12345678098765n);

console.log(234567n * BigInt(3456));

console.log(20n > 17);
console.log(23n === 23);
console.log(typeof 40n);

const huge = 35279040837642317930n;

console.log(huge + " is REALLY BIG!!");
// huge gets converted into a string

// division
console.log(10n / 3n);
console.log(10 / 3);
console.log(17n / 3n);

// 07_CREATING DATES

// creating a date
const now = new Date();
console.log(now);

console.log(new Date("Aug 20 2022 14:54:52"));
console.log(new Date("december 24 ,2017"));

console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 15, 14, 56, 6));
console.log(new Date(2037, 10, 32));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
// 👇millisecods that have been passed since january 1
console.log(new Date(2142237180000));
console.log(Date.now());
console.log(new Date(1660995032800));

future.setFullYear(2040);
console.log(future);

const Future = new Date(2037, 10, 19, 15, 23);
console.log(+Future);

const calcDatePassed = (date1, date2) =>
  Math.abs(date2 - date1) / (24 * 60 * 60 * 1000);

const days1 = calcDatePassed(new Date(2037, 4, 14), new Date(2037, 4, 24));

console.log(days1);

// INTERNATITIONILIZING NUMBERS

const num = 3884764.45;

const options = {
  style: "currency",
  // unit: "mile-per-hour",
  currency: "EUR",
  // useGrouping: false,    //-->3884764.45
};

console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-De", options).format(num));
console.log("Syria: ", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

// 012_Timers_setTimeouts and setIntervals

const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with🍕 ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
// we scheduled this function call for 3 sec later
console.log("waiting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// set timeout
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
