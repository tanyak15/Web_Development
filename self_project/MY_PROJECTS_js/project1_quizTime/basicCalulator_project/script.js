"use script";
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
// const add = document.querySelector(".add");
// const sub = document.querySelector(".sub");
// const div = document.querySelector(".div");
// const mul = document.querySelector(".mul");
// const rem = document.querySelector(".rem");
// const exp = document.querySelector(".exp");
const result = document.querySelector(".result");
const operations = document.querySelectorAll(".operation");
// console.log(operations);

const equal = document.querySelector(".equal");
const backSpace = document.querySelector(".backSpc");
const clear = document.querySelector(".clear");
// *************************************************************************************************

function getInput() {
  if (input1.value === "" || input2.value === "") {
    alert("Error!Text field empty");
    return [undefined, undefined];
    // here we r returning array becoz we want a function to return more than one value
    // error case k liye undefined ,undefined return kr rahe h kuch kuch input nhi dala h
  } else {
    const num1 = Number.parseInt(input1.value);
    const num2 = Number.parseInt(input2.value);
    return [num1, num2];
  }
}
let ans__g = 0; // g signifies it is global variable
// isko global isliye banaya kyuki baad me usee krnaa h

// traversing node list
for (const [indx, btn] of operations.entries()) {
  //returns an array of [index , element]

  const operationName = btn.dataset.operator;
  //button k andar jo bhe data tha usko fetch out kr liya

  //   console.log(operationName);
  btn.addEventListener("click", function () {
    const [num1, num2] = getInput(); //destructuring
    if (!num1 && !num2) {
      return;
    }

    if (operationName === "+") {
      //due to data-operator
      ans__g = num1 + num2;
    }
    if (operationName === "-") {
      ans__g = num1 - num2;
    }
    if (operationName === "*") {
      ans__g = num1 * num2;
    }
    if (operationName === "/") {
      ans__g = num1 / num2;
    }
    if (operationName === "%") {
      ans__g = num1 % num2;
    }
    if (operationName === "**") {
      ans__g = num1 ** num2;
    }
  });
}

// add.addEventListener("click", function () {
//   const [num1, num2] = getInput();
//   if (!num1 && !num2) {
//     return;
//   }
//   ans__g = num1 + num2;
//   console.log(ans__g);
// });
// sub.addEventListener("click", function () {
//   const [num1, num2] = getInput();
//   if (!num1 && !num2) {
//     return;
//   }
//   ans__g = num1 - num2;
//   console.log(ans__g);
// });
// div.addEventListener("click", function () {
//   const [num1, num2] = getInput();
//   if (!num1 && !num2) {
//     return;
//   }
//   ans__g = num1 / num2;
//   console.log(ans__g);
// });
// mul.addEventListener("click", function () {
//   const [num1, num2] = getInput();
//   if (!num1 && !num2) {
//     return;
//   }
//   ans__g = num1 * num2;
//   console.log(ans__g);
// });
// rem.addEventListener("click", function () {
//   const [num1, num2] = getInput();
//   if (!num1 && !num2) {
//     return;
//   }
//   ans__g = num1 % num2;
//   console.log(ans__g);
// });
// exp.addEventListener("click", function () {
//   const [num1, num2] = getInput();
//   if (!num1 && !num2) {
//     return;
//   }
//
//   ans__g = Math.pow(num1, num2);
//   console.log(ans__g);
// });

clear.addEventListener("click", function () {
  input1.value = "";
  input2.value = "";
  result.textContent = "";
  result.classList.add("hidden");
});

equal.addEventListener("click", function () {
  result.classList.remove("hidden");
  result.textContent = ans__g;
  //   console.log(ans__g);
});
// ques urself WHEN ? whwn u dont know where to put particular code
backSpace.addEventListener("click", function () {
  let word1 = input1.value;
  let word2 = input2.value;

  const newWord1 = word1.slice(0, word1.length - 1);
  input1.value = newWord1;

  const newWord2 = word2.slice(0, word2.length - 1);
  input2.value = newWord2;
  console.log(newWord2);
});

// const [a, b] = [undefined, undefined];
// console.log(a, b);
