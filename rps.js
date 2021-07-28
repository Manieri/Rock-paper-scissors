let playerScore = 0;
let computerScore = 0;


let computerPlay = () => {
    let random_choice = Math.floor(Math.random() * 3);

    if (random_choice == 0) return 'rock';
    else if (random_choice == 1) return 'paper'
    else return 'scissors';
}


let game = () => {

    let playRound = (playerSelection, computerSelection) => {
        playerSelection = playerSelection.toLowerCase();

        if (
            (computerSelection === 'rock' && playerSelection === 'paper') ||
            (computerSelection === 'paper' && playerSelection === 'scissors') ||
            (computerSelection === 'scissors' && playerSelection === 'rock')
        ) {
            playerScore++;
            return 'Player wins!'
        }
        else if (
            (computerSelection === 'rock' && playerSelection === 'scissors') ||
            (computerSelection === 'paper' && playerSelection === 'rock') ||
            (computerSelection === 'scissors' && playerSelection === 'paper')
        ) {
            computerScore++;
            return 'Computer wins! Try again.'
        }
        else return 'Draw!'

    }

    const playerSelection = prompt('Pick between Rock, Paper, or Scissors');
    const computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`)
}

for (let i = 0; i < 5; i++) {
    game();
}