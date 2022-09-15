function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() *3);
    switch(computerChoice){
        case 0:
            return computerChoice = 'Rock';
        case 1:
            return computerChoice = 'Paper';
        default:
            return computerChoice = 'Scissors';
    }
}

function getPlayerSelection(){
    let playerSelection = prompt("Please enter your selection").toLowerCase();
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}


function displayRoundWinner(playerWins, computerChoice, playerSelection){
    let endRoundMessage;
    if (playerWins === true){
        endRoundMessage = `You Win! ${playerSelection} beats ${computerChoice}`;
    }
    else if(playerWins === false){
        endRoundMessage = `You Lose! ${computerChoice} beats ${playerSelection}`;
    }
    else{
        endRoundMessage = "It's a Tie!"
    }
    return endRoundMessage
}

function displayGameWinner(currentScore){
    if  (currentScore > 0){
        return "Game Over! You Won!";
    }
    else if (currentScore < 0){
        return "Game Over! You Lost!";
    }
    else{
        return "The Game is a Tie" ;
    }
}

function playRound(computerChoice, playerSelection){
    if (computerChoice == playerSelection){  
        return displayRoundWinner(undefined, computerChoice, playerSelection);
    }
    else if (computerChoice == 'Rock' && playerSelection == 'Scissors'){
        currentScore -= 1;
        return displayRoundWinner(false, computerChoice, playerSelection);
    }
    else if (computerChoice == 'Paper' && playerSelection == 'Rock'){
        currentScore -= 1;
        return displayRoundWinner(false, computerChoice, playerSelection);
    }
    else if(computerChoice == 'Scissors' && playerSelection == 'Paper'){
        currentScore -= 1;
        return displayRoundWinner(false, computerChoice, playerSelection);
    }
    else{
        currentScore += 1;
        return displayRoundWinner(true, computerChoice, playerSelection);
    }
    
}

function game(){

    for (let i = 0; i < 5; i++){
        computerChoice = getComputerChoice();
        playerSelection = getPlayerSelection();
        console.log(playRound(computerChoice, playerSelection));
    }
    console.log(displayGameWinner(currentScore));
}

var currentScore = 0;
game()




