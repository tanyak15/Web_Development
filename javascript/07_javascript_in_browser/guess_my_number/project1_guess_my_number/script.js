"use strict";
/*
console.log(document.querySelector(".message").textContent);
// console.log(document.querySelector(".label-score").textContent);

document.querySelector(".message").textContent = "correct no.";

// const message = document.querySelector(".message");
// const label_Score = document.querySelector(".label-score");

// message.textContent = "Hello Tanya!!";

document.querySelector(".number").textContent = 6;
console.log(document.querySelector(".guess").value);

document.querySelector(".guess").value = "45";
console.log(document.querySelector(".guess").value);
*/

// *********************************************************

// ---------PROJECT #1 :GUESS MY NUMBER---------

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //state variable
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //   document.querySelector(".message").textContent = "correct no.";

  //when there is no input
  if (!guess) {
    displayMessage("โโno number");

    //when player wins the game
  } else if (guess === secretNumber) {
    displayMessage("๐๐correct number!");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //when guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "๐ Too high" : "๐ Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "๐You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
  //  when guess is high

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "๐ Too high";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "๐You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }

  //when guess is low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "๐ Too low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "๐You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayMessage("Start guessing...");

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".score").textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";
});
