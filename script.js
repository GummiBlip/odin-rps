let rockData = new Map([
  ["name", "rock"],
  ["rock", "draw"],
  ["paper", "lose"],
  ["scissors", "win"]
]);
let paperData = new Map([
  ["name", "paper"],
  ["rock", "win"],
  ["paper", "draw"],
  ["scissors", "lose"]
]);
let scissorsData = new Map([
  ["name", "scissors"],
  ["rock", "lose"],
  ["paper", "win"],
  ["scissors", "draw"]
]);

function gameLoop() {
  let roundsToPlay = getDesiredRounds();
  let playerChoice;
  let computerChoice;
  let score = [0, 0];
  for (round = 1; round <= roundsToPlay; round++) {
    
    do {
    playerChoice = stringToChoice(getPlayerChoice());
    if (playerChoice === null) {
      printHelp()
    }
    } while (playerChoice === null)
    
    computerChoice = getComputerChoice();
    let roundResult = getRoundResult(playerChoice, computerChoice);
    updateScore(roundResult, score);
    announceRoundResult(roundResult, playerChoice, computerChoice, score);
    announceScore(round, roundsToPlay, score);
    
  }
}

function updateScore(playerRoundResult, score) {
  switch (playerRoundResult) {
    case "win":
      score[0]++;
      break;
    case "lose":
      score[1]++;
      break;
    case "draw":
      break;
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
    case "paper":
      return paperData;
    case "scissors":
    case "scissor":
      return scissorsData;
    default:
      return null;
  }

}

function getRoundResult(playerChoice, computerChoice) {
  return (playerChoice.get(computerChoice.get("name")))
}

function announceRoundResult(playerRoundResult, playerChoice, computerChoice, score) {
  alert(`You ${playerRoundResult}! ${capitalize(playerChoice.get("name"))} ${playerRoundResult + "s"} against ${capitalize(computerChoice.get("name"))}.`);
}

function announceScore(currentRound, roundsToPlay, score) {
  if (currentRound < roundsToPlay) {
    alert(`This makes the score ${score[0]} for the player and ${score[1]} for the computer as of Round ${currentRound}.`);
  } else {
    alert(`This makes the score ${score[0]} for the player and ${score[1]} for the computer overall!`);
  }
}

function printHelp() {
  alert("This is a Rock Paper Scissors game written in JavaScript. Please enter 'Rock,' 'Paper,' or 'Scissors' to select your move.")
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

let startButton = document.querySelector("button");
startButton.addEventListener("click", gameLoop)