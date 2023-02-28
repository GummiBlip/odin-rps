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
  return input;
}

function convertPlayerChoice(choice) {
  switch (choice.toLowerCase()) {
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

function printHelp() {
  console.log("This is a Rock Paper Scissors game written in JavaScript. Please enter 'Rock,' 'Paper,' or 'Scissors' to select your move.")
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function getPlayerResult(playerChoice, computerChoice) {
  let playerResult = null;
  switch (playerChoice.get(computerChoice.get("name"))) {
    case "beats":
      return playerResult = "win";
    case "loses":
      return playerResult = "lose";
    case "draws":
      return playerResult = "draw";
    default:
      console.log("An error has ocurred. Please check the getPlayerResult function.")
      return playerResult;
}

}

function announceRoundResult(playerRoundResult, playerChoice, computerChoice) {
  console.log(`You ${playerRoundResult}! ${capitalize(playerChoice.get("name"))} ${playerRoundResult + "s"} against ${capitalize(computerChoice.get("name"))}.`);
}

function gameLoop(roundsToPlay = 5) {
  let playerChoice
  let computerChoice
  for (rounds = 0; rounds < roundsToPlay; rounds++) {
    do {
    playerChoice = convertPlayerChoice(getPlayerChoice());
    if (playerChoice === null) {
      printHelp()
    }
    } while (playerChoice === null)
    
    computerChoice = getComputerChoice();
    let roundResult = getPlayerResult(playerChoice, computerChoice);
    announceRoundResult(roundResult, playerChoice, computerChoice)
    
  }
}



printHelp()
window.addEventListener('load', gameLoop())