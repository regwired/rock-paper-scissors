const choices = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors"
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * Object.keys(choices).length)]
}