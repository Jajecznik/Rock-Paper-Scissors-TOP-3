// return random choice made by computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

// return the winner of single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            console.log("Tie! You both gave Rock!");
            return 0;
        } else if (computerSelection == 'paper') {
            console.log("You lose! Paper beats Rock!");
            return -1;
        } else {
            console.log("You win! Rock beats Scissors!");
            return 1;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log("You win! Paper beats Rock!");
            return 1;
        } else if (computerSelection == 'paper') {
            console.log("Tie! You both gave Paper!");
            return 0;
        } else {
            console.log("You lose! Scissors beats Paper!");
            return -1;
        }
    } else if (computerSelection == 'rock') {
        console.log("You lose! Rock beats Scissors!");
        return -1;
    } else if (computerSelection == 'paper') {
        console.log("You win! Scissors beats Paper!");
        return 1;
    } else {
        console.log("Tie! You both gave Scissors!");
        return 0;
    }
}

// play 5 rounds of the game
function playGame() {
    let points = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = "";

        while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            playerSelection = prompt("Rock or Paper or Scissors: ");
            playerSelection = playerSelection.toLowerCase().trim();
        }

        let winner = playRound(playerSelection, computerSelection);
        points += winner;
    }

    if (points > 0) {
        console.log("You won!");
    } else if (points < 0) {
        console.log("You lost!");
    } else {
        console.log("Tie!");
    }
}

console.log("Hey! This is 'Rock Paper Scissors' game. You will play 5 runds against the computer, after which a winner will be selected. Good luck!");
playGame();

