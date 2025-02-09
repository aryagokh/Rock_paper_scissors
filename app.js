let userScoreHere = 0;
let compScoreHere = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

let userScore = document.querySelector('#user-score')
let compScore = document.querySelector('#comp-score')


let genCompChoice = () => {
    let options = ['rock', 'paper', 'scissor'];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

let drawGame = () => {
    msg.innerText = 'Game was Draw!';
    msg.style.backgroundColor = '#081b31';
}

let decideWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = 'green';
        userScoreHere++;
        userScore.innerText = userScoreHere;
    } else {
        msg.innerText = `You Lose! ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats your ${userChoice}.`;
        msg.style.backgroundColor = 'red';
        compScoreHere++;
        compScore.innerText = compScoreHere;
    }
}

let playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
        }
        if(userChoice === 'paper'){
            userWin = compChoice === 'scissor' ? false : true;
        }
        if(userChoice === 'scissor'){
            userWin = compChoice === 'rock' ? false : true;
        }
        decideWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})