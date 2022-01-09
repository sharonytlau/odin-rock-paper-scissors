const choices = ["rock", "scissors", "paper"];
const selectionPairs = [["rock","scissors"], ["paper", "rock"], ["scissors", "paper"]];

// computer's play: randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay(){
  let randomInt = Math.floor(Math. random()*choices.length);
  return choices[randomInt]
}

// single round of Rock Paper Scissors, return 1 if player wins, return 0 if tie, else return -1
function singleRound(playerSelection, computerSelection){
  console.log(`Your selection: ${playerSelection}. Computer Selection: ${computerSelection}.`)

  if (playerSelection === computerSelection){
    console.log("Tie!");
    return 0
  }

  for (let p = 0; p < selectionPairs.length; p++){
    if (playerSelection === selectionPairs[p][0]){
      if (computerSelection === selectionPairs[p][1]){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
      } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
      }
    }
  }

}

// check user input
function checkInput(inputString){
  return choices.includes(inputString.toLowerCase()) ? true : false
}

// game 5 round game that keeps score and reports a winner or loser at the end
function game(){

  let playerScore = 0;
  let computerScore = 0;

  for (let i=0; i<5; i++){

    let rawPlayerSelection = prompt(`Round ${i+1}: your selection (rock/paper/scissors)`);

    while (!checkInput(rawPlayerSelection)){
      rawPlayerSelection = prompt("Your input is not valid! Please enter your selection (rock/paper/scissors)");
    }
  
    let playerSelection = rawPlayerSelection.toLowerCase();
    let computerSelection = computerPlay();

    roundResult = singleRound(playerSelection, computerSelection);
    if (roundResult > 0){
      playerScore += roundResult;
    } else {
      computerScore += -roundResult;
    }

    console.log(`Your score: ${playerScore}\n Computer Score: ${computerScore}`);
  }

  if (playerScore > computerScore){
    alert("You win! Congratulations!");
  } else if (playerScore === computerScore) { 
    alert("Tie! Refresh the page to play another round.")
  } else {
    alert("You lose! Refresh the page to play another round.")
  }

}

game();