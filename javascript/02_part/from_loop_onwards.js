const jonas = [
  "steven",
  "jones",
  2022 - 2001,
  "programmer",
  ["michael", "haley", "nia"],
  true,
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // types[i] =typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

//-----------coding challenge #4-----------
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

let tip;
function calcTip(bill_value) {
  if (bill_value >= 50 && bill_value <= 300) {
    return (tip = bill_value * 0.15);
  } else {
    return (tip = bill_value * 0.2);
  }
}

for (let i = 0; i < bills.length; i++) {
  // tips[i] = calcTip([bills[i]]);
  // total[i] = tips[i]+bills[i];
  // console.log(`The tip is :${tips[i]} , and total is :${total[i]}`);
  const tip = calcTip([bills[i]]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills, tips, total);

function calcAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / 10;
}
console.log(calcAvg(bills));
console.log(calcAvg(tips));
console.log(calcAvg(total));
