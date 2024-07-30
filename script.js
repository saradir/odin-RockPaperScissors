const DICT = {0: "rock", 1: "paper", 2: "scissors"};
const NUM_ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    playerMove = prompt(`type your move:
    1. Rock 
    2. Paper
    3. Scissors`).toLowerCase();

    switch(playerMove){
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}
    
function playRound(humanChoice, computerChoice){

   
    const result = humanChoice - computerChoice;
    console.log(result);

    switch(result){
        case 0:
            console.log(`Computer chose ${DICT[computerChoice]}, that's a tie!`);
            break;
        case 1:
        case (-2):
            console.log(`Computer chose ${DICT[computerChoice]}, you win!`);
            humanScore += 1;
            break;
        case 2:
        case (-1):
            console.log(`Computer chose ${DICT[computerChoice]}, you lose!`);
            computerScore += 1;
            break;
    }
}

function playGame(){
    for (let i = 0; i < NUM_ROUNDS; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();
