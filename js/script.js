let humanScore = 0;
let computerScore = 0;

let computerSelection;
let playerSelection;


let dashboard = document.querySelector("#dashboard");
const result = document.createElement("p");
const round = document.createElement("p");
result.setAttribute("style","display:flex;")
round.setAttribute("style","display:flex;")
let btns = document.querySelector("#buttons");
btns.addEventListener('click',(event)=>{
    let target = event.target;

    switch(target.id){
        case 'rock':
            playerSelection='rock';
            if(isGameOver()){
                break;
            }
            computerSelection = getComputerSelection();
            playRound(playerSelection,computerSelection);
            break;
        case 'paper':
            playerSelection='paper';
            if(isGameOver()){
                break;
            }
            
            computerSelection = getComputerSelection();
            playRound(playerSelection,computerSelection);
            break;
        case 'scissors':
            playerSelection='scissors';
            if(isGameOver()){
                break;
            }
            
            computerSelection = getComputerSelection();
            playRound(playerSelection,computerSelection);
        break;
        }
});

function getComputerSelection(){
    computerInt = Math.floor(Math.random() * 3);
    if (computerInt==0){
        computerSelection = "rock"
    }else if(computerInt==1){
        computerSelection = "paper"
    }else if(computerInt==2){
        computerSelection = "scissors"
    }
    return computerSelection;
}

function playRound(playerSelection,computerSelection){
     if (playerSelection==computerSelection){
        round.textContent= "Draw " + playerSelection +" Vs " + computerSelection
        result.textContent = "Human " +humanScore +" Vs  PC "+ computerScore

    }else if(computerSelection == "rock" && playerSelection =="scissors"){
        computerScore ++;
        round.textContent="Computer won the round: " + computerSelection +" Vs " + playerSelection
        result.textContent = "Human " +humanScore +" Vs  PC "+ computerScore

    }else if(computerSelection == "paper" && playerSelection == "rock"){
        computerScore ++;
        round.textContent= "Computer won the round: " + computerSelection +" Vs " + playerSelection
        result.textContent = "Human " +humanScore +" Vs  PC "+ computerScore

    }else if(computerSelection == "scissors" && playerSelection =="paper"){
        computerScore ++;
        round.textContent="Computer won the round: " + computerSelection +" Vs " + playerSelection
        result.textContent = "Human " +humanScore +" Vs  PC "+ computerScore

    }else{
        round.textContent="Human won the round: " + playerSelection +" Vs " + computerSelection
        humanScore ++;
        result.textContent = "Human " +humanScore +" Vs  PC "+ computerScore
    }
}

function isGameOver(){
    if(humanScore>=5){
        result.textContent= "Game is over. Human wins! FATALITY. "+humanScore + " to " + computerScore
        round.remove();
        return true;
    }else if(computerScore>=5){
        result.textContent= "Game is over. Computer wins! FATALITY. "+computerScore + " to " + humanScore
        round.remove();
        return true;
    }else{
        return false;
    }
}

dashboard.appendChild(result);
dashboard.appendChild(round);

/*  

*/

/*
let checkIfEnd = () => {if (humanScore==5 || computerScore==5){

}
*/


/*
if(humanScore>computerScore){
    console.log("Human wins with : " + humanScore + " wins against " + computerScore)
}else if(humanScore<computerScore){
    console.log("Computer wins with : " + computerScore + " wins against " + humanScore)
}else{
    console.log("Draw between human and computer with : " + computerScore + " wins against " + humanScore)
}*/