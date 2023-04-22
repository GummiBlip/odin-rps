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
  startButton.style.display = "none";
  gameplayButtons.style.display = "flex";
  let computerMove = getRandomMove();
}

function updateScore(roundResult, score) {
  switch (roundResult) {
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


function getRandomMove() {
  let randomNumber = (Math.floor(Math.random() * 3));
  switch (randomNumber) {
    case 0:
      return rockData;
    case 1:
      return paperData;
    case 2:
      return scissorsData;
    default:
      console.log("Error! Check the getRandomMove function!");
      return rockData;
  }
}

function getMatchupResult(move, target) {
  return (move.get(target.get("name"))) 
}


function announceGameState(roundResult, playerMove, computerMove, score) {
  let infoText = `You ${roundResult}! ${capitalize(playerMove.get("name"))} ${roundResult + "s"} against ${capitalize(computerMove.get("name"))}.`
  if (currentRound < roundsToPlay) {
    infoText += ` This makes the score ${score[0]} for the player and ${score[1]} for the computer as of Round ${currentRound}.`;
  } else {
    infoText += ` This makes the score ${score[0]} for the player and ${score[1]} for the computer overall!`;
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

let startButton = document.querySelector("button.start");
let gameplayButtons = document.querySelector(".gameplay")
startButton.addEventListener("click", initializeGame);