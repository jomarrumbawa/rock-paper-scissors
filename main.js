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
  if (humanChoice == 'rock' && computerChoice == 'scissors') {
    humanScore++
    console.log("You win! Rock beats scissors.")
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    humanScore++
    console.log("You win! Scissors beats paper.")
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    humanScore++
    console.log("You win! Paper beats rock")
  } else if (humanChoice == 'rock' && computerChoice == 'paper') {
    computerScore++
    console.log("You lose! Paper beats rock.")
  } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    computerScore++
    console.log("You lose! Scissors beats paper.")
  } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
    computerScore++
    console.log("You lose! Rock beats scissors.")
  } else {
    console.log ("It's a tie.")
  }
}

playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())