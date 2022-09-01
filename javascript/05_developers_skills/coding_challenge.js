const data1 = [17, 21, 23];

console.log(`...${data1[0]}C ...${data1[1]}C ...${data1[2]}C`);

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]}C in ${i + 1} days ...`;
  }
  console.log("..." + str);
}
printForecast(data1);
