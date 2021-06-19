console.log("hello");

// cache the DOM. instead of doing document commands every single time, we store it in a variable.
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); /* cos the text is in paragraph (<p>) */
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const pick = Math.floor(Math.random() * 3);
    return choices[pick];
}

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
}

function lose(){
    compScore++;
    compScore_span.innerHTML = compScore;
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    const combine = userChoice + compChoice;
    switch(combine) {
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            result_p.innerHTML = userChoice + " is the same as " + compChoice + ". Draw!!";
            document.getElementById(userChoice).classList.add('grey-glow');
            setTimeout(() => {document.getElementById(userChoice).classList.remove('grey-glow')}, 300);
            break;
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win();
            result_p.innerHTML = userChoice + " beats " + compChoice + ". You win!!";
            document.getElementById(userChoice).classList.add('green-glow');
            setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose();
            result_p.innerHTML = userChoice + " loses to " + compChoice + ". You lost!!";
            document.getElementById(userChoice).classList.add('red-glow');
            setTimeout(() => {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
            break;
    }
    console.log(compChoice);
}

// clicking buttons
rock_div.addEventListener('click', () => game("Rock"));
paper_div.addEventListener('click', () => game("Paper"));
scissors_div.addEventListener('click', () => game("Scissors"));

