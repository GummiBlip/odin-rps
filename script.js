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
      console.log("An unexpected issue has arisen. Check the code of the convertPlayerChoice function.");
  }

}

function printHelp() {
  console.log("This is a Rock Paper Scissors game written in JavaScript. Please enter 'Rock,' 'Paper,' or 'Scissors' to select your move.")
}

function getRoundResult(playerChoice, computerChoice) {
  let result = null;
  console.log(playerChoice.get(computerChoice.get("name")))
  switch (playerChoice.get(computerChoice.get("name"))) {
    case "beats":
      return result = "win";
    case "loses":
      return result = "loss";
    case "draws":
      return result = "draw";
    default:
      console.log("An error has ocurred. Please check the getRoundResult function.")
}

}

function announceRoundResult(playerRoundResult, playerChoice, computerChoice) {
  switch (playerRoundResult) {
    case "win":
      console.log("You win! " + playerChoice.get("name") + " beats " + computerChoice.get("name"));
      break;
    case "loss":
      console.log("You lose! " + playerChoice.get("name") + " loses to " + computerChoice.get("name"));
      break;
    case "draw":
      console.log("It's a draw! " + playerChoice.get("name") + " draws with " + computerChoice.get("name"));
      break;
  }
}

function gameLoop(roundsToPlay = 5) {
  for (rounds = 0; rounds < roundsToPlay; rounds++) {
    let playerChoice = convertPlayerChoice(getPlayerChoice());
    let computerChoice = getComputerChoice();
    let roundResult = getRoundResult(playerChoice, computerChoice);
    announceRoundResult(roundResult, playerChoice, computerChoice)
    
  }
}

window.addEventListener('load', gameLoop())