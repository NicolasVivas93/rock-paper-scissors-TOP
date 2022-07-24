//CREAR FUNCION getComputerChoice()

function getComputerChoice() {
    let indicator = Math.floor(Math.random() * 3) + 1 // genera numero random entre 1 y 3

    // devolver "Rock" o "Paper" o "Scissors" random de acuerdo al valor del indicator
    switch (indicator) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
    }
}

//CREAR FUNCION playRound() 

function playRound(playerSelection = prompt("Please choose (Rock-Paper-Scissors) to play:"), computerSelection = getComputerChoice()) {
    //Convertir ambas strings en minusculas
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("Winner: Computer (Paper beats Rock)");
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("Winner: Player (Rock beats Scissors)");
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("Winner: Player (Paper beats Rock)");
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log("Winner: Computer (Scissors beats Paper)");
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log("Winner: Computer (Rock beats Scissors)");
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("Winner: Player (Scissors beats Paper)");
    } else {
        console.log("Tied game")
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
}

game();

