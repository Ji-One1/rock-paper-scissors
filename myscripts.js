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
    buttons = document.querySelectorAll("button");
    var playerSelection;
    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            if (e.target.id == 'rock'){
                console.log('he');
                playerSelection = 'Rock';
            }
            else if(e.target.id == 'paper'){
                playerSelection =  'Paper';
            }
            else{
                playerSelection =  'Scissors';
            }
        });
    })
    return playerSelection
}


function displayRoundWinner(playerWins, computerChoice, playerSelection){
    let endRoundMessage;
    if (playerWins == 'win'){
        endRoundMessage = `You Win! ${playerSelection} beats ${computerChoice}`;
    }
    else if(playerWins == 'lose'){
        endRoundMessage = `You Lose! ${computerChoice} beats ${playerSelection}`;
    }
    else{
        endRoundMessage = "It's a Tie!"
    }
    return endRoundMessage
}

function getCurrentScore(playerScore,computerScore){
    return `Player: ${playerScore}          Computer: ${computerScore}` 
}

function playRound(computerChoice, playerSelection){
    if (computerChoice == playerSelection){  
        return displayRoundWinner('tie', computerChoice, playerSelection);
    }
    else if (computerChoice == 'Rock' && playerSelection == 'Scissors'){
        computerScore += 1;
        return displayRoundWinner('lose', computerChoice, playerSelection);
    }
    else if (computerChoice == 'Paper' && playerSelection == 'Rock'){
        computerScore += 1;
        return displayRoundWinner('lose', computerChoice, playerSelection);
    }
    else if(computerChoice == 'Scissors' && playerSelection == 'Paper'){
        computerScore += 1;
        return displayRoundWinner('lose', computerChoice, playerSelection);
    }
    else{
        playerScore += 1;
        return displayRoundWinner('win', computerChoice, playerSelection);
    }
    
}


function endGame(winner){
    displayBox.textContent = `${winner} wins!`
}





var playerScore = 0;
var computerScore = 0;
displayBox = document.querySelector(".display-winner");
scoreBox = document.querySelector(".display-score")

buttons = document.querySelectorAll("button");
var playerSelection;
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id == 'rock'){
            playerSelection = 'Rock';
        }
        else if(e.target.id == 'paper'){
            playerSelection =  'Paper';
        }
        else{
            playerSelection =  'Scissors';
        }
        computerChoice = getComputerChoice();
        roundText = playRound(computerChoice, playerSelection);
        displayBox.textContent = roundText;
        scoreText = getCurrentScore(playerScore, computerScore);
        scoreBox.textContent = scoreText
        if (playerScore == 5){
            endGame('Player')
        }
        else if(computerScore == 5){
            endGame('Computer')
        }
        })
    });
