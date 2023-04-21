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

function initializeGame() {
  let computerChoice = getComputerChoice();
}

function updateScore(roundResult, score) {
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

function setDesiredRounds() {
  console.log("To be implemented");
    }


function pickComputerMove() {
  let randomNumber = (Math.floor(Math.random() * 3));
  switch (randomNumber) {
    case 0:
      return rockData;
    case 1:
      return paperData;
    case 2:
      return scissorsData;
    default:
      console.log("Error! Check the pickComputerMove function!");
      return rockData;
  }
}

function getMatchupResult(playerMove, computerMove) {
  return (playerChoice.get(computerChoice.get("name")))
}


//todo: Combine announceRoundResult and announceScore

function announceRoundResult(roundResult, playerMove, computerMove, score) {
  alert(`You ${playerRoundResult}! ${capitalize(playerChoice.get("name"))} ${playerRoundResult + "s"} against ${capitalize(computerChoice.get("name"))}.`);
}

function announceScore(currentRound, roundsToPlay, score) {
  if (currentRound < roundsToPlay) {
    alert(`This makes the score ${score[0]} for the player and ${score[1]} for the computer as of Round ${currentRound}.`);
  } else {
    alert(`This makes the score ${score[0]} for the player and ${score[1]} for the computer overall!`);
  }
}

function announceWinner(score) {
if (score[0] > score[1]) {
  alert(`The player wins with a score of ${score[0]} to the computer's ${score[1]}!`);
} else if (score[1] > score[0]) {
  alert(`The computer wins with a score of ${score[1]} to the player's ${score[0]}!`);
} else {
  alert(`It's a draw! ${score[0]}-${score[0]}`);
}}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}


let startButton = document.querySelector("button");
startButton.addEventListener("click", gameLoop)