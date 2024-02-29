const buttons = document.querySelectorAll('.btn');
const roundResult = document.querySelector('.round-result');
const gameResult = document.querySelector('.game-result');
const playAgain = document.querySelector('.play-again');

let playerPoints = 0;
let computerPoints = 0;

window.addEventListener("DOMContentLoaded", playGame);

// main function that runs the game
function playGame() {
    roundResult.innerText = "Click one of the buttons above to START the game";
    gameResult.innerText = "";
    playAgain.classList.add('hidden');

    // allows to choose 'weapon'
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (playerPoints < 5 && computerPoints < 5) {
                let computerSelection = getComputerChoice();
                let playerSelection = button.innerText;
                playerSelection = playerSelection.toLowerCase().trim();

                let result = playRound(playerSelection, computerSelection);
                playerPoints += result[0];
                computerPoints += result[1];

                gameResult.innerText = `${playerPoints} : ${computerPoints}`;
                checkWinner();
            }
        });
    });

    // allows to play the game again
    playAgain.addEventListener('click', () => {
        playerPoints = 0;
        computerPoints = 0;
        roundResult.innerText = "Click one of the buttons above to START the game";
        gameResult.innerText = "";
        playAgain.classList.add('hidden');
    });
}

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
            roundResult.innerText = "Tie! You both gave Rock!";
            return [0, 0];
        } else if (computerSelection == 'paper') {
            roundResult.innerText = "You lose! Paper beats Rock!";
            return [0, 1];
        } else {
            roundResult.innerText = "You win! Rock beats Scissors!";
            return [1, 0];
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            roundResult.innerText = "You win! Paper beats Rock!";
            return [1, 0];
        } else if (computerSelection == 'paper') {
            roundResult.innerText = "Tie! You both gave Paper!";
            return [0, 0];
        } else {
            roundResult.innerText = "You lose! Scissors beats Paper!";
            return [0, 1];
        }
    } else if (computerSelection == 'rock') {
        roundResult.innerText = "You lose! Rock beats Scissors!";
        return [0, 1];
    } else if (computerSelection == 'paper') {
        roundResult.innerText = "You win! Scissors beats Paper!";
        return [1, 0];
    } else {
        roundResult.innerText = "Tie! You both gave Scissors!";
        return [0, 0];
    }
}

// check if game ends
function checkWinner() {
    if (playerPoints == 5) {
        gameResult.innerText = "You Won!"
        playAgain.classList.remove('hidden');
    } else if (computerPoints == 5) {
        gameResult.innerText = "You Lost!"
        playAgain.classList.remove('hidden');
    }
}
