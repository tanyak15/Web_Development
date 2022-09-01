"use script";
const input = document.querySelector(".input");
const show = document.querySelector(".show");
const output = document.querySelector(".box");
const body = document.querySelector("body");

function ranNo(low, high) {
  let num = Math.random() * (high - low) + low;
  return Math.trunc(num);
}

show.addEventListener("click", function () {
  const inp = input.value;
  if (inp === "") {
    alert("please enter before submitting");
    return;
  }
  input.value = "";
  output.textContent = inp;
  //   let x = 45,
  //     y = 134,
  //     z = 234;
  body.style.backgroundColor = `rgb(
   ${ranNo(0, 255)} ,
   ${ranNo(0, 255)} ,
   ${ranNo(0, 255)})`;
});
