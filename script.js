"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(randomNumber);
  console.log(guess, typeof guess);

  // when the input is empty
  if (!guess) {
    displayMessage("🚫 No number");
    // when the guess is correct
  } else if (guess == randomNumber) {
     displayMessage("Congratulations Correct Guess!!! 🏆");
      ;
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  }
  //when guess wrong number
  else if (guess !== randomNumber) {
    if (score > 1) {
       displayMessage(guess > randomNumber ? "📈Too High" : "📉Too Low")
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😑 Sorry,You lose";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
});
