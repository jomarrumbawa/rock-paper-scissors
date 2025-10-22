const btns = document.querySelector("#btn-wrapper")
const gameMessage = document.querySelector("#game-message")
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const rand = Math.floor(Math.random() * choices.length)
  return choices[rand]
}

function getHumanChoice() {
  const choice = prompt("Rock, paper or scissors?")
  return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
  let message = ""

  if (humanChoice == 'rock' && computerChoice == 'scissors') {
    humanScore++
    message = "You win! Rock beats scissors."
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    humanScore++
    message = "You win! Scissors beats paper."
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    humanScore++
    message = "You win! Paper beats rock"
  } else if (humanChoice == 'rock' && computerChoice == 'paper') {
    computerScore++
    message = "You lose! Paper beats rock."
  } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    computerScore++
    message = "You lose! Scissors beats paper."
  } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
    computerScore++
    message = "You lose! Rock beats scissors."
  } else {
    message = "It's a tie."
  }
  gameMessage.textContent = message
}

btns.addEventListener("click", function(event) {
  const target = event.target
  const playerChoice = target.textContent.toLowerCase()

  switch(playerChoice) {
    case 'rock':
      playRound(playerChoice, getComputerChoice())
      break;
    case 'paper':
      playRound(playerChoice, getComputerChoice());
      break;
    case 'scissors':
      playRound(playerChoice, getComputerChoice())
      break;
  }
})