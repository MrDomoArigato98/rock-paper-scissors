let userInput = prompt("What hand are you throwing? Rock, Paper, or scissors?")

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
computerInt = getComputerChoice()

let computerHand;
if (computerInt==0){
    computerHand = "Rock"
    console.group(computerHand)
}else if(computerInt==1){
    computerHand = "Paper"
    console.group(computerHand)
}else if(computerInt==3){
    computerHand = "Scissors"
    console.group(computerHand)
}

