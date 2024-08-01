const DICT = {"rock": 0, "paper": 1, "scissors": 2};
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

}

function getHumanChoice(){
    playerMove = prompt(`type your move:
    1. Rock 
    2. Paper
    3. Scissors`).toLowerCase();

    return playerMove;
}
    
function playRound(humanChoice, computerChoice){

    const result = DICT[humanChoice] - DICT[computerChoice];
    
    switch(result){
        case 0:
            resultBox.textContent = `Computer chose ${computerChoice}, that's a tie!`;
            break;
        case 1:
        case (-2):
            resultBox.textContent = `Computer chose ${computerChoice}, you win!`;
            humanScore += 1;
            break;
        case 2:
        case (-1):
            resultBox.textContent = `Computer chose ${computerChoice}, you lose!`;
            computerScore += 1;
            break;
    }
    displayScore();
    checkGameOver();
}

function displayScore(){
    computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;
}

function checkGameOver(){
    if(humanScore === 5){
        gameOver.textContent = "Game is over, you win!";
        resetGame();
    } else if(computerScore === 5){
        gameOver.textContent = "Game is over, you lose!";
        
    }
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
}
const btns = document.querySelectorAll("button");

btns.forEach(button => {
    button.addEventListener("click", (e) => {
        playRound(e.target.id, getComputerChoice());
    })
    
});

const resultBox = document.querySelector("div.result");

const computerScoreDisplay = document.querySelector("span.computer-score");
const humanScoreDisplay = document.querySelector("span.human-score");

const gameOver = document.querySelector("div.gameOver");