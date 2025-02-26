let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const rstBtn = document.querySelector("#reset-btn");

const comChoice = () => {
    const options = ["paper","rock","scissors"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
}

const drawGame = () => {
    msg.innerText = "Game is draw! :(  Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,ranChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won !! ${userChoice} beats ${ranChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comScorePara.innerText = compScore;
        msg.innerText = `You Lose !! ${ranChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const ranChoice = comChoice();
    if(userChoice === ranChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = ranChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = ranChoice === "scissors" ? false :true ;
        }else {
            userWin = ranChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,ranChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

rstBtn.addEventListener("click",() => {
    userScorePara.innerText = 0;
    comScorePara.innerText =0;
    userScore=0;
    compScore=0;
})



