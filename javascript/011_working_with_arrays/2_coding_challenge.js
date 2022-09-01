"use script";

const ages = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log(humanAge);

  const filterDogAge = humanAge.filter(filterAge => filterAge >= 18);
  console.log(filterDogAge);

  //   const average =
  //     filterDogAge.reduce((acc, avg) => acc + avg, 0) / filterDogAge.length;

  const average = filterDogAge.reduce(
    (acc, avg, i, arr) => acc + avg / arr.length,
    0
  );

  return average;
};

// calcAverageHumanAge(ages);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

// CODING CHALLENGE #3
const calcAverageHumanAge2 = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(filterAge => filterAge >= 18)
    .reduce((acc, avg, i, arr) => acc + avg / arr.length, 0);

console.log(calcAverageHumanAge2(ages));
