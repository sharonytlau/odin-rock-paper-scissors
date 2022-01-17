const choices = ["rock", "scissors", "paper"];
const selectionPairs = [["rock","scissors"], ["paper", "rock"], ["scissors", "paper"]];

// computer's play: randomly return either ‘rock’, ‘paper’ or ‘scissors’
function computerPlay(){
  let randomInt = Math.floor(Math. random()*choices.length);
  return choices[randomInt]
}

// single round of Rock Paper Scissors, 
// return 1 if player wins, return 0 if tie, else return -1
function singleRound(playerSelection, computerSelection){

  if (playerSelection === computerSelection){
    return 0
  }

  for (let p = 0; p < selectionPairs.length; p++){
    if (playerSelection === selectionPairs[p][0]){
      return (computerSelection === selectionPairs[p][1]) ? 1 : -1; 
    }
  }

}

const body = document.querySelector("body");

const selectionBtns = document.querySelectorAll(".btn-selection");

const playerAvatar = document.querySelector("#avatar");

const playerScoreDiv = document.querySelector("#score-player");
const computerScoreDiv = document.querySelector("#score-computer");

const computerSelectionDiv = document.querySelector("#computer-selection")

const resultDiv = document.querySelector("#game-result"); 

const restartBtn = document.querySelector("#restart-btn");

let playerScore = 0;
let computerScore = 0;

function getSelection(e){
  playerSelection = e.target.id;
  return playerSelection
}

function updateComputerDiv(computerSelection){
  switch (computerSelection){
    case "rock":
      computerSelectionDiv.textContent = "✊";
      break;
      case "paper":
        computerSelectionDiv.textContent = "🖐";
        break;
        case "scissors":
          computerSelectionDiv.textContent = "✌";
          break;
        }
      }

      function game(e){
        
        computerSelectionDiv.style["background-color"] = "var(--color-primary)";

        let playerSelection = getSelection(e);
        let computerSelection = computerPlay();
        
        setTimeout(() => { 
          computerSelectionDiv.style["background-color"] = "var(--color-primary-light)";
        }, 100);
        
  setTimeout(() => { 
    computerSelectionDiv.style["border"] = "5px solid var(--color-dark-gray)";
  }, 100);
  
  
  setTimeout(updateComputerDiv(computerSelection), 200);
  
  computerSelectionDiv.style["border"] = "5px solid var(--color-primary)";
  
  roundResult = singleRound(playerSelection, computerSelection);
  
  if (roundResult > 0){
    playerAvatar.textContent = "😎";
    playerScore += roundResult;
  } else if (roundResult === 0){
    playerAvatar.textContent = "🧐"; 
  } else {
    playerAvatar.textContent = "🤔";
    computerScore += -roundResult;
  }
  
  playerScoreDiv.textContent = playerScore;
  computerScoreDiv.textContent = computerScore;
  
  if (playerScore === 5 || computerScore === 5) {
    
    if (playerScore > computerScore){
      playerAvatar.textContent = '😊';
      resultDiv.textContent = "You win!";
    } else {
      playerAvatar.textContent = '😵';
      resultDiv.textContent = "Computer wins!";
    } 
    
    selectionBtns.forEach(item => item.removeEventListener('click', game));
  }

}

function startNewGame(){
  
  playerScoreDiv.textContent = 0;
  computerScoreDiv.textContent = 0;
  
  playerScore = 0;
  computerScore = 0;
  
  resultDiv.textContent = '';
  playerAvatar.textContent = '😀';
  
  selectionBtns.forEach(item => item.addEventListener('click', game)); 
  
  computerSelectionDiv.style["background-color"] = "var(--color-light-gray)";
  computerSelectionDiv.textContent = '';
}

restartBtn.addEventListener('click', startNewGame);

startNewGame();
