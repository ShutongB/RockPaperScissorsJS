// HTML elements
const resultDiv = document.getElementById("result");
const choicesDiv = document.getElementById("choices");
const resetButton = document.getElementById("reset");
const scoreDiv = document.getElementById("score");

// Choices array
const choices = ["rock", "paper", "scissors"];

// Game state
let wins = 0;
let losses = 0;

// Event listeners for the choices
choicesDiv.addEventListener("click", playGame);
resetButton.addEventListener("click", resetGame);

// Function to play the game
function playGame(event) {
  if (event.target.classList.contains("choice")) {
    const playerChoice = event.target.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    showResult(playerChoice, computerChoice, result);
    updateScore(result);
  }
}

// Function to get the computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get the game result
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Function to show the game result
function showResult(playerChoice, computerChoice, result) {
  const resultText = `You chose ${playerChoice}. The computer chose ${computerChoice}. You ${result}!`;
  resultDiv.textContent = resultText;
}

// Function to update the score
function updateScore(result) {
  if (result === "win") {
    wins++;
  } else if (result === "lose") {
    losses++;
  }
  scoreDiv.textContent = `Wins: ${wins} - Losses: ${losses}`;
}

// Function to reset the game
function resetGame() {
  resultDiv.textContent = "";
  wins = 0;
  losses = 0;
  scoreDiv.textContent = "Wins: 0 - Losses: 0";
}
