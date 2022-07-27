const player = "player";
const computer = "computer";
const choices = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors"
};

function getComputerChoice() {
  const choicesKeys = Object.keys(choices);
  return choices[choicesKeys[Math.floor(Math.random() * Object.keys(choices).length)]];
}

function getPlayerChoice() {
  while (true) {
    let playerSelection = prompt("Choose between rock paper and scissors: ").toLowerCase();
    if (playerSelection in choices) {
      return playerSelection;
    }
    else {
      alert("Not a valid choice");
    }
  }
}

function getRounds() {
  while (true) {
    let rounds = +prompt("Rounds to play: ");
    if(!isNaN(rounds)) {
      return rounds;
    }
  }
}

function chooseWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return;
  }
  else if (playerSelection === choices.rock) {
    if (computerSelection === choices.scissors) {
      return player;
    }
    else {
      return computer;
    }
  }
  else if (playerSelection === choices.paper) {
    if( computerSelection === choices.rock) {
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

function playRound() {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  let winner = chooseWinner(playerSelection, computerSelection);

  if (!winner) {
    return "Tie!";
  }
  else if(winner === player) {
    return `You win! \nComputer chose ${computerSelection} and your ${playerSelection} beats it`;
  }
  else {
    return `You lose! \nComputer chose ${computerSelection} and beats ${playerSelection}`;
  }
}

function playGame() {
  const rounds = getRounds();

  for (let i = 0; i < rounds; i++) {
    console.log(playRound());
  }
}

playGame();