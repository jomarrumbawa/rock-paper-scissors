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
