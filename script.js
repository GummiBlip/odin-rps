let rockData = new Map([
  ["name", "rock"],
  ["rock", "draws"],
  ["paper", "loses"],
  ["scissors", "beats"]
]);
let paperData = new Map([
  ["name", "paper"],
  ["rock", "beats"],
  ["paper", "draws"],
  ["scissors", "loses"]
]);
let scissorsData = new Map([
  ["name", "scissors"],
  ["rock", "loses"],
  ["paper", "beats"],
  ["scissors", "draws"]
]);

function getComputerChoice() {
  let randomNumber = (Math.floor(Math.random() * 3));
  switch (randomNumber) {
    case 0:
      return rockData;
    case 1:
      return paperData;
    case 2:
      return scissorsData;
    default:
      console.log("An unexpected issue has arisen. Check the code of the getComputerChoice function.");
  }
}

function getPlayerChoice() {
  let input = prompt("Please enter your selection, or type help for help: ");
}

function handlePlayerChoice(choice) {
  switch (choice.toLowerCase()) {
    case "rock":
      return rockData;
    case 'paper':
      return paperData;
    case 'scissors' || 'scissor':
      return scissorsData;
    default:
      console.log("An unexpected issue has arisen. Check the code of the handlePlayerChoice function.");
  }

}

function printHelp() {
  console.log("This is a Rock Paper Scissors game written in JavaScript. Please enter 'Rock,' 'Paper,' or 'Scissors' to select your move.")
}


let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

switch (computerChoice.get(playerChoice)) {
  case "beats":
    console.log("You lost!")
}
