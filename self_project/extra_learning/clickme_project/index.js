"use strict";

// const container = document.querySelector(".container");
const button_start = document.querySelector(".button-start");
// const content = document.querySelector(".content");
const innerContainer = document.querySelector(".inner-container");

const getCloseButton = function () {
  if (document.querySelector(".button-close")) {
    return document.querySelector(".button-close");
  } else {
    return undefined;
  }
};

const htmlCode = `
<div class="content ">
<h4>Hello there!This is the text</h4>
<button type="button" class="button-close">❌</button>
</div>
`;
let close = undefined;
button_start.addEventListener("click", function (e) {
  e.preventDefault();
  innerContainer.insertAdjacentHTML("beforeEnd", htmlCode);
  close = getCloseButton();

  close?.addEventListener("click", function (e) {
    e.preventDefault();
    innerContainer.innerHTML = "";
  });
});
