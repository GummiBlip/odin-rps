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

function getRoundResult(playerChoice, computerChoice) {
  let result = null;
  switch (playerChoice.get(computerChoice.get("name"))) {
    case "beats":
      return result = "win";
    case "loses":
      return result = "lose";
    case "draws":
      return result = "draw";
    default:
      console.log("An error has ocurred. Please check the getRoundResult function.")
      return result;
}

}

function announceRoundResult(playerRoundResult, playerChoice, computerChoice) {
  // Fix this to use correct wording. Add tally function for score.
  console.log(`You ${playerRoundResult}! ${capitalize(playerChoice.get("name"))} draws with ${capitalize(computerChoice.get("name"))}.`);
  switch (playerRoundResult) {
    case "win":
      console.log("You win! " + playerChoice.get("name") + " beats " + computerChoice.get("name"));
      break;
    case "loss":
      console.log("You lose! " + playerChoice.get("name") + " loses to " + computerChoice.get("name"));
      break;
    case "draw":
      console.log(`It's a draw! ${capitalize(playerChoice.get("name"))} draws with ${capitalize(computerChoice.get("name"))}.`);
      break;
  }
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
    let roundResult = getRoundResult(playerChoice, computerChoice);
    announceRoundResult(roundResult, playerChoice, computerChoice)
    
  }
}



printHelp()
window.addEventListener('load', gameLoop())