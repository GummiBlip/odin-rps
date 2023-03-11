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

function gameLoop() {
  let roundsToPlay = getDesiredRounds();
  let playerChoice;
  let computerChoice;
  for (rounds = 0; rounds < roundsToPlay; rounds++) {
    
    do {
    playerChoice = stringToChoice(getPlayerChoice());
    if (playerChoice === null) {
      printHelp()
    }
    } while (playerChoice === null)
    
    computerChoice = getComputerChoice();
    let roundResult = getRoundResult(playerChoice, computerChoice);
    announceRoundResult(roundResult, playerChoice, computerChoice)
    
  }
}

function getDesiredRounds() {
  let desiredRounds;
  while (true) {
    desiredRounds = parseInt(prompt("Please enter the number of Rock Paper Scissors rounds you'd like to play: "));
    if ( (desiredRounds < 1) || isNaN(desiredRounds)) {
      alert("Please enter a valid number of rounds.");
      continue;
    } else {
      return desiredRounds;
    }
}}

function getPlayerChoice() {
  let input = prompt("Please enter your selection, or type help for help: ");
  if (input === null) {
    return input = "rock";
  } else {
    return input;
  }
}

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
      alert("An unexpected issue has arisen. Check the code of the getComputerChoice function.");
  }
}

function stringToChoice(string) {
  switch (string.toLowerCase()) {
    case "rock":
      return rockData;
    case 'paper':
      return paperData;
    case 'scissors' || 'scissor':
      return scissorsData;
    default:
      return null;
  }

}

function getRoundResult(playerChoice, computerChoice) {
  switch (playerChoice.get(computerChoice.get("name"))) {
    case "beats":
      return "win";
    case "loses":
      return "lose";
    case "draws":
      return "draw";
    default:
      alert("An error has ocurred. Please check the getPlayerResult function.")
      return null;
}

}

function announceRoundResult(playerRoundResult, playerChoice, computerChoice) {
  alert(`You ${playerRoundResult}! ${capitalize(playerChoice.get("name"))} ${playerRoundResult + "s"} against ${capitalize(computerChoice.get("name"))}.`);
}

function updateScore(playerRoundResult) {
//To be written
}

function printHelp() {
  alert("This is a Rock Paper Scissors game written in JavaScript. Please enter 'Rock,' 'Paper,' or 'Scissors' to select your move.")
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

let startButton = document.querySelector("button");
startButton.addEventListener("click", gameLoop)