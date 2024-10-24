

let userScore = 0;
let computerScore = 0;
let scoreuser = document.querySelector("#user-score")
let scorecomputer = document.querySelector("#computer-score")
let msg = document.querySelector("#msg")
let winSound = document.querySelector("#winSound")
let tie = document.querySelector("#tie")
let loose = document.querySelector("#lose")
const choices = document.querySelectorAll(".choice");

window.onload = () => {
    winSound.play().catch(error => console.log("User interaction required to play sound."));
};

window.onload = () => {
    tie.play().catch(error => console.log("User interaction required to play sound."));
};

window.onload = () => {
    lose.play().catch(error => console.log("User interaction required to play sound."));
};
const computerChoice=()=> {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    if(random == 0){
        return options[0]="rock"
    }else if(random == 1)
    {
        return options[1]="paper"
    }else{
        return options[2]="scissor"
    }
}

const playGame =(userChoice) =>{
    console.log("user choice= ", userChoice)
    let computerPick = computerChoice();

    if (
        (computerPick === "rock" && userChoice === "scissor") ||
        (computerPick === "paper" && userChoice === "rock") ||
        (computerPick === "scissor" && userChoice === "paper")
    ) {
        computerScore++;
        msg.innerTex = "Computer wins this round!";
        lose.play();
    } else if (computerPick === userChoice) {
        msg.innerText = "It's a tie!";
        tie.play()
    } else {
        winSound.play()
        userScore++;
        msg.innerText = "User wins this round!";
    }
    scoreuser.innerText = userScore
    scorecomputer.innerText = computerScore
}

choices.forEach((each)=> {
    each.addEventListener("click", (e)=> {
        const userChoice = each.getAttribute("id");
       playGame(userChoice)
    })
})


