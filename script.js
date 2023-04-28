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
  if (setDesiredRounds() == false) {
    return;
  }
  updateInfo(`Playing ${roundsToPlay} rounds. Select your first move!`)

  let roundsSelection = document.querySelector(".roundsSelection");
  let gameplayButtons = document.querySelector(".gameplay");
  startButton.style.display = "none";
  roundsSelection.style.display = "none";
  gameplayButtons.style.display = "flex";
  
  for (const button of gameplayButtons.children) {
    button.addEventListener("click", playRound);
  }
}

function setDesiredRounds() {
  roundsToPlay = Math.floor(document.querySelector("#rounds").value);
  if (!isNaN(roundsToPlay) && roundsToPlay >= 1 && roundsToPlay <= 99) {
    return true;
  } else {
    updateInfo("Please enter a valid number of rounds.");
    roundsToPlay = 5;
    return false;
  }
}

function playRound() {
  let computerMove = getRandomMoveName();
  let playerMove = this.id;
  let result = getMatchupResult(playerMove, computerMove);
  updateScore(result);
  announceGameState(result, playerMove, computerMove);
  if (currentRound === roundsToPlay) {
    endGame();
  }
  currentRound += 1;
}

function updateScore(roundResult) {
  switch (roundResult) {
    case "win":
      score["player"]++;
      break;
    case "lose":
      score["computer"]++;
      break;
    default:
      break;
  }
  }

function getRandomMoveName() {
  let randomNumber = (Math.floor(Math.random() * 3));
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      console.log("Error! Check the getRandomMove function!");
      return "rock";
  }
}

function getMatchupResult(moveName, targetName) {
  return nameData.get(moveName).get(targetName);
}

function announceGameState(roundResult, playerMoveName, computerMoveName) {
  let announcementText = getAnnouncementText(roundResult, playerMoveName, computerMoveName);
  updateInfo(announcementText);
  }

function getAnnouncementText(roundResult, playerMoveName, computerMoveName) {
  let playerScore = score["player"];
  let computerScore = score["computer"];
  let announcementText = `You ${roundResult}! ${capitalize(playerMoveName)} ${roundResult + "s"} against ${capitalize(computerMoveName)}.`
  if (currentRound < roundsToPlay) {
    announcementText += ` This makes the score ${playerScore} for the player and ${computerScore} for the computer as of Round ${currentRound}.`;
  } else {
    if (playerScore > computerScore) {
      announcementText += (` The player wins with a score of ${playerScore} to the computer's ${computerScore}!`);
    } else if (computerScore > playerScore) {
      announcementText += (` The computer wins with a score of ${computerScore} to the player's ${playerScore}!`);
    } else {
      announcementText += (` It's a draw! ${playerScore}-${computerScore}`);
      }}
  return announcementText;
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function updateInfo(message) {
  let informationParagraph = document.querySelector(".info p");
  informationParagraph.innerText = message;
}

function endGame() {
  let gameplayButtons = document.querySelector(".gameplay");
  let refreshButton = document.querySelector(".refresh");

  gameplayButtons.style.display = "none";
  refreshButton.style.display = "block";

  refreshButton.addEventListener("click", () => {
    location.reload();
  });
}

let score = {
  player: 0,
  computer: 0
};
let roundsToPlay = 5;
let currentRound = 1;
let startButton = document.querySelector("button.start");
document.querySelector("button.start").addEventListener("click", initializeGame);
