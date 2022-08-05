const player = "player";
const computer = "computer";
let playerScore = 0;
let computerScore = 0;

const gameLog = document.querySelector("#log");
const playerScoreDOM = document.querySelector("#player-score");
const computerScoreDOM = document.querySelector("#computer-score");
const inputChoices = document.querySelectorAll(".input-choice");

const choices = {
  ROCK: "rock",
  paper: "paper",
  scissors: "scissors"
};

function getComputerChoice() {
  const choicesKeys = Object.keys(choices);
  return choices[choicesKeys[Math.floor(Math.random() * Object.keys(choices).length)]];
}

function chooseWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return;
  }
  else if (playerSelection === choices.ROCK) {
    if (computerSelection === choices.scissors) {
      return player;
    }
    else {
      return computer;
    }
  }
  else if (playerSelection === choices.paper) {
    if( computerSelection === choices.ROCK) {
      return player;
    }
    else {
      return computer;
    }
  }
  else {
    if (computerSelection === choices.paper) {
      return player;
    }
    else {
      return computer;
    }
  }
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let winner = chooseWinner(playerSelection, computerSelection);
  if (winner == player) {
    playerScore++;
    playerScoreDOM.innerText = playerScore;
    gameLog.innerText = `YOU WIN!\nComputer chose ${computerSelection}`;
  }
  else if (winner == computer){
    computerScore++;
    computerScoreDOM.innerText = computerScore;
    gameLog.innerText = `YOU LOSE!\nComputer chose ${computerSelection}`;
  }
  else {
    gameLog.innerText = "TIE!";
  }
}

inputChoices.forEach(input => {
  input.addEventListener("click", (e) => playRound(e.target.name));
});