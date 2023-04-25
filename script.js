let rockData = new Map([
  ["rock", "draw"],
  ["paper", "lose"],
  ["scissors", "win"]
]);
let paperData = new Map([
  ["rock", "win"],
  ["paper", "draw"],
  ["scissors", "lose"]
]);
let scissorsData = new Map([
  ["rock", "lose"],
  ["paper", "win"],
  ["scissors", "draw"]
]);
let nameData = new Map([
  ["rock", rockData],
  ["scissors", scissorsData],
  ["paper", paperData]
])

function initializeGame() {
  if (!validateRounds()) return -1;
  setGamePage();

  let startButton = document.querySelector("button.start");
  let roundsSelection = document.querySelector(".roundsSelection");
  let gameplayButtons = document.querySelector(".gameplay");
  startButton.style.display = "none";
  roundsSelection.style.display = "none";
  gameplayButtons.style.display = "flex";
  
  for (const button of gameplayButtons.children) {
    button.addEventListener("click", playRound);
  }
}

function playRound() {
  console.log(getRandomMove());
}

function validateRounds() {
  let rounds = document.querySelector("#rounds").value;
}

function updateScore(roundResult) {
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

function getMatchupResult(moveName, targetName) {
  return nameData.get(moveName).get(targetName);
}

function announceGameState(roundResult, playerMove, computerMove, score) {
  let announcementText = `You ${roundResult}! ${capitalize(playerMove.get("name"))} ${roundResult + "s"} against ${capitalize(computerMove.get("name"))}.`
  if (currentRound < roundsToPlay) {
    announcementText += ` This makes the score ${score[0]} for the player and ${score[1]} for the computer as of Round ${currentRound}.`;
  } else {
    if (score[0] > score[1]) {
      announcementText += (` The player wins with a score of ${score[0]} to the computer's ${score[1]}!`);
    } else if (score[1] > score[0]) {
      announcementText += (` The computer wins with a score of ${score[1]} to the player's ${score[0]}!`);
    } else {
      announcementText += (` It's a draw! ${score[0]}-${score[1]}`);
      }}
  updateInfo(announcementText);
  }

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function updateInfo(message) {
  let informationParagraph = document.querySelector(".info p");
  informationParagraph.innerText = message;
}

let score = [0, 0];
document.querySelector("button.start").addEventListener("click", initializeGame);
