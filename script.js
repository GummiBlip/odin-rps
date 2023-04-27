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
  roundsToPlay = Math.floor(Math.abs(document.querySelector("#rounds").value));
  roundsToPlay == 0 ? 1 : roundsToPlay;

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

function playRound() {
  console.log(getRandomMove());
}

function updateScore(roundResult) {
  switch (roundResult) {
    case "win":
      score[player]++;
      break;
    case "lose":
      score[computer]++;
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

let score = {
  player: 0,
  computer: 0
};

let roundsToPlay = 5;
let startButton = document.querySelector("button.start");
document.querySelector("button.start").addEventListener("click", initializeGame);
