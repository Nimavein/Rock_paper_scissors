function computerPlay() {
    let options = Array("ROCK", "SCISSORS", "PAPER");
    return options[Math.floor(Math.random() * options.length)];
}

let playerPoints = 0;
let computerPoints = 0;


function singleRound(playerSelection, computerSelection) {
    let playerSelectionUpper = playerSelection.toUpperCase();

    if (playerSelectionUpper == "ROCK" || playerSelectionUpper == "SCISSORS" || playerSelectionUpper == "PAPER") {

      if (playerSelectionUpper == computerSelection) {
      return "DRAW";
      }
      else if (playerSelectionUpper == "ROCK" && computerSelection == "PAPER") {
        computerPoints ++;
        return "YOU LOSE. Paper beats rock. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
      else if (playerSelectionUpper == "SCISSORS" && computerSelection == "PAPER") {
        playerPoints ++;
        return "YOU WIN. Scissors beat paper. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
      else if (playerSelectionUpper == "ROCK" && computerSelection == "SCISSORS") {
        playerPoints ++;
        return "YOU WIN. Rock beats scissors. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
      else if (playerSelectionUpper == "SCISSORS" && computerSelection == "ROCK") {
        computerPoints ++;
        return "YOU LOSE. Rock beats scissors. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
      else if (playerSelectionUpper == "PAPER" && computerSelection == "SCISSORS") {
        computerPoints ++;
        return "YOU LOSE. Scissors beat paper. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
      else if (playerSelectionUpper == "PAPER" && computerSelection == "ROCK") {
        playerPoints ++;
        return "YOU WON. Paper beats rock. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
    }
    else {
        console.log("Wrong move");
    }
}


function gameResult() {
  if (playerPoints > computerPoints) {
    console.log("You won the whole game");
  }
  else if (playerPoints < computerPoints) {
    console.log("You lost the whole game")
  }
  else if (playerPoints == computerPoints) {
    console.log("The whole game ended with draw")
  }
}  



for (roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
  // runs singleRound five times
  console.log(singleRound(prompt("Choose your move:"), computerPlay()));
}

gameResult();