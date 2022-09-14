function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() *3);
    switch(computerChoice){
        case 0:
            return computerChoice = 'Rock';
        case 1:
            return computerChoice = 'Paper';
        default:
            return computerChoice = 'Scissors'
    }
}
