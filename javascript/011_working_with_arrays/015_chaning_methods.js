"use script";

const EURToUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// PIPELINE
const totalDepositsUsd = movements
  .filter(mov => mov < 0)
  //   .map(mov => mov * EURToUSD)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * EURToUSD;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUsd);
