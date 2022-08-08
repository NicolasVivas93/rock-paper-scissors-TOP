//Crear scores de jugadores
let playerScore = 0;
let computerScore = 0;

showResults("") //Mostramos el inicio del marcador 0-0

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
    

    if (playerChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        showResults("Computer's Point");
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerScore += 1;
        showResults("Player's Point");
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        playerScore += 1;
        showResults("Player's Point");
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        showResults("Computer's Point");
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        showResults("Computer's Point");
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerScore += 1;
        showResults("Player's Point");
    } else {
        showResults("Tied game")
    }

    if (playerScore == 5) {
        showResults("Congratulations!!! You Win!!!")
    } else if (computerScore == 5) {
        showResults("Sorry man!")
    }
}

function showResults(content) {
    const results = document.querySelector(".results")
    const message = document.querySelector("h2")
    message.innerText = content
    results.appendChild(message)

    const acumPlayer = document.querySelector("#playerScore")
    const acumComputer = document.querySelector("#computerScore")
    acumPlayer.innerText = `Player Score : ${playerScore}`
    acumComputer.innerText = `Computer Score : ${computerScore}`
    results.appendChild(acumPlayer)
    results.appendChild(acumComputer)
}


const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener('click', () => {
        //traer texto del boton
        let btnTxt = button.textContent
        playRound(btnTxt)
    })
})
