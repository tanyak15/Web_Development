// 'use script';
const pageLayout = document.querySelector('.layout');
const box = document.querySelector('.box');
const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operations]');
const equalsButton = document.querySelector('[data-equals]');
const clearAllButton = document.querySelector('[data-clear-all]');
const backspaceButton = document.querySelector('[data-backspace]');

const output = document.querySelector('.output');
let string = "";



numberButtons.forEach(el => el.addEventListener('click', (e) => {
    e.preventDefault();

    // console.log(e.target);
    output.textContent = output.textContent + e.target.dataset.number;
  
}
));

operationsButtons.forEach(el => el.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target);
    output.textContent = output.textContent + e.target.dataset.operations;

}
));

clearAllButton.addEventListener('click', (e) => {
    e.preventDefault();
    output.textContent = "";
});

backspaceButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (output.textContent === "") {

        return;
    }
    else {
        output.textContent = output.textContent.substring(0, output.textContent.length - 1);
    }

});


//  functions___________________________________

const ans = function (string, ope) {
    // string
    // operator
    let result = 0;
    const splitedString = string.split(ope);
    // console.log(splitedString);
    const num1 = Number.parseFloat(splitedString[0]);
    const num2 = Number.parseFloat(splitedString[1]);
    // console.log(num1, num2);
    if (ope === '+') {
        result = num1 + num2;
        result = result.toFixed(5);
    }
    else if (ope === '-') {
        result = num1 - num2;
        result = result.toFixed(5);
    }
    else if (ope === '*') {
        result = num1 * num2;
    }
    else if (ope === '/') {
        result = num1 / num2;
    }
    else if (ope === '%') {
        result = num1 % num2;
    }

    return result;
}

const getOpeartion = function (string) {
    for (const ope of string) {
        if (ope === "+" || ope === "-" || ope === "*" || ope === "/" || ope === "%") {
            return ope;
        }
    }
}

// _____________________________________________

equalsButton.addEventListener('click', (e) => {
    e.preventDefault();
    string = output.textContent;
    const result = ans(string, getOpeartion(string));
    // console.log(result);
    output.textContent = eval(string);

});





