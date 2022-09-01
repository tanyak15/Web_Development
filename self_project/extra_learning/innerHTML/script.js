"use strict";

const code = `<div align="left">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua.
</div>`;

const html1 = `<div class="box1"></div>`;
const html2 = `<div class="box2"></div>`;
const html3 = `<div class="box3"></div>`;
const html4 = `<div class="box4"></div>`;

document.querySelector("#app").insertAdjacentHTML("beforeBegin", html1);
document.querySelector("#app").insertAdjacentHTML("afterBegin", html2);

document.querySelector("#app").insertAdjacentHTML("beforeEnd", html3);

document.querySelector("#app").insertAdjacentHTML("afterEnd", html4);

document.querySelector("#app").insertAdjacentHTML("beforeEnd", code);

console.log(document.querySelector("#app").innerHTML);

console.log(document.querySelector("#app").outerHTML);
// includes the selected tag also
