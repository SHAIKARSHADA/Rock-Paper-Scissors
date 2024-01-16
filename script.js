let  userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
  msg.innerText = "Game Was Draw , Play Again .";
  msg.style.backgroundColor ="orangered";
}

const showWinner = (userWin,userChoice,compChoice) => {
  if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win ! Your ${userChoice} Beats ${compChoice}.` ;
    msg.style.backgroundColor = "#4A9C54";
    

  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose ! Your ${compChoice} Beats ${userChoice}.`;
    msg.style.backgroundColor = "#DE1A24";
  }
} 

const genCompChoice = () => {
  const options = ["rock","paper","scissors"];
  const randomIdx = Math.floor(Math.random()*3);
  return options[randomIdx];
}

const playGame = (userChoice) => {
  console.log("user Choice = ",userChoice);
  const compChoice = genCompChoice();
  console.log("Computer choice = ",compChoice);
  if(userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if(userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,compChoice,userChoice);
  }

}


choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})