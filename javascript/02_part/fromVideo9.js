const frnd1 = "steve";
const frnd2 = "bob";
const frnd3 = "michael";
const frnd = ["steve", "bob", "michael"];
console.log(frnd);

const frndNew = new Array(1992, 1987, 2003, 2009, 2020);
console.log(frndNew);

frnd[2] = "jonas";
console.log(frnd);
console.log();

// const frnd = ['steve','bob','michael'];
const newfrnd = frnd.push("dan");
console.log(frnd);
console.log(frnd.length);
console.log(newfrnd);

frnd.unshift("ted");
console.log(frnd);

frnd.pop();
console.log(frnd);

frnd.shift();
console.log(frnd);

console.log(frnd.indexOf("bob"));
console.log(frnd.indexOf("dan"));

frnd.push(20);
console.log(frnd.includes("bob"));

//coding challenge #2
let tip;
function calcTip(bill_value) {
  if (bill_value >= 50 && bill_value <= 300) {
    return (tip = bill_value * 0.15);
  } else {
    return (tip = bill_value * 0.2);
  }
}
console.log(calcTip(100));
const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

console.log(tips);

const total = new Array(
  tips[0] + bills[0],
  tips[1] + bills[1],
  tips[2] + bills[2]
);
console.log(total);
