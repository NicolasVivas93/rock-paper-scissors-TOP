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

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    //Convertir ambas strings en minusculas
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    
    //Crear scores de jugadores
    let playerScore = 0;
    let computerScore = 0;

    if (playerChoice == "rock" && computerChoice == "paper") {
        showResults("Winner: Computer (Paper beats Rock)");
        computerScore += 1;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        showResults("Winner: Player (Rock beats Scissors)");
        playerScore += 1;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        showResults("Winner: Player (Paper beats Rock)");
        playerScore += 1;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        showResults("Winner: Computer (Scissors beats Paper)");
        computerScore += 1;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        showResults("Winner: Computer (Rock beats Scissors)");
        computerScore += 1;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        showResults("Winner: Player (Scissors beats Paper)");
        playerScore += 1;
    } else {
        showResults("Tied game")
    }

    console.log(computerScore)
    console.log(playerScore)
}

function showResults(content) {
    const results = document.querySelector(".results")
    const message = document.createElement("h2")
    message.innerText = content
    results.appendChild(message)
}


const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener('click', () => {

        //traer texto del boton
        let btnTxt = button.textContent
        playRound(btnTxt)
    })
})
