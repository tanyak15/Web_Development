"use strict";
const buttonStart = document.querySelector(".button_start");
const buttonStartAgain = document.querySelector(".button_startAgain");
const buttonReset = document.querySelector(".button_reset");
const buttonNext = document.querySelector(".button_next");
const quesContainer = document.querySelector(".quesContainer");
const quizBody = document.querySelector(".quiz_body");
const ques = document.querySelector(".ques");
const boxes = document.querySelectorAll(".box"); //returns node list of elements
const scorePanel = document.querySelector(".score");

// *******************************************************************************************************************//
const quesArray = [
  {
    ques: "What is capital of India?",
    options: ["Jaipur", "New Delhi", "Udaipur", "Patna"],
    correctAns: 1,
  },
  {
    ques: "What is our National Bird ?",
    options: ["Sparrow", "Kingfisher", "Peacock", "Crow"],
    correctAns: 2,
  },
  {
    ques: "What is our national song? ",
    options: [
      "Vande Matram",
      "Jana Gana Mana",
      "Char Bottle Vodka",
      "Jane Meri Jane Mann",
    ],
    correctAns: 0,
  },
  {
    ques: "What is our national Animal ",
    options: ["Lion", "Chettah", "Elephant", "Tiger"],
    correctAns: 3,
  },
  {
    ques: "What is our National Fruit?",
    options: ["Mango", "Orange", "Apple", "Strawberry"],
    correctAns: 0,
  },
];

// *******************************************************************************************************************//

//this shows that the game has started or not
let isStarted;
let totalScore;
console.log(quesContainer);
const initialise = function () {
  isStarted = false;
  totalScore = 0;
  ques.classList.add("hidden");
  buttonNext.classList.add("hidden");
  buttonStartAgain.classList.add("hidden");
  buttonStart.classList.remove("hidden");
  for (let box of boxes) {
    box.classList.add("hidden");
  }
  scorePanel.classList.add("hidden");
};
initialise();

// *******************************************************************************************************************//

const updateUI = function (indx) {
  ques.textContent = quesArray[indx].ques;
  for (let i = 0; i < 4; i++) {
    document.querySelector(`#option${i}`).textContent =
      quesArray[indx].options[i];
    // console.log(document.querySelector(`#option${i}`));
  }
};
// *******************************************************************************************************************//

let Username;
let indx;
let selectedIndex;
buttonStart.addEventListener("click", function (eve) {
  eve.preventDefault(); //prevent behaviour of default button i.e.  it refreshes the page

  isStarted = true;
  ques.classList.remove("hidden");
  buttonNext.classList.remove("hidden");
  buttonStart.classList.add("hidden");
  buttonStartAgain.classList.remove("hidden");

  for (let box of boxes) {
    box.classList.remove("hidden");
  }
  Username = prompt(`enter ur name!`) ?? "userName";
  console.log(Username);

  indx = 0;
  // selectedIndex = 0;
  updateUI(indx);
});

// *******************************************************************************************************************//

buttonStartAgain.addEventListener("click", function () {
  indx = 0;
  updateUI(indx);
  totalScore = 0;
  isStarted = true;
});

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    console.log(i);
    boxes[i].classList.add("selected"); //change the colour of the option that is clicked
    selectedIndex = i;

    for (let j = 0; j < 4; j++) {
      if (j !== i) {
        boxes[j].classList.remove("selected");
      }
    }
  });
}

// *******************************************************************************************************************//

buttonNext.addEventListener("click", function () {
  if (indx == 4) {
    if (selectedIndex == quesArray[indx].correctAns) {
      totalScore += 10;
    } else {
      totalScore -= 0;
    }
    // console.log(indx, totalScore);

    buttonNext.classList.add("hidden");
    ques.classList.add("hidden");
    scorePanel.classList.remove("hidden");
    scorePanel.textContent = `Hey ${Username},you scored ${totalScore} out of 50 🎉!!!`;

    for (const box of boxes) {
      box.classList.add("hidden");
    }
  } else {
    if (selectedIndex == quesArray[indx].correctAns) {
      totalScore += 10;
    } else {
      totalScore -= 0;
    }
    // console.log(indx, totalScore);
    indx++;
    updateUI(indx);
  }

  for (const box of boxes) {
    box.classList.remove("selected");
  }
});

buttonReset.addEventListener("click", initialise);
