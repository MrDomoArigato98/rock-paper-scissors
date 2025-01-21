let humanScore = 0;
let computerScore = 0;
let humanHand;
let computerHand;

let btns = document.querySelector("#buttons");
btns.addEventListener('click',(event)=>{
    let target = event.target;

    switch(target.id){
        case 'rock':
            alert('Rock pressed');
            break;
        case 'paper':
            alert('Paper pressed');
            break;
        case 'scissors':
            alert('scissors pressed');
        break;
        }
});

/*
    function getHumanHand(){
        let humanHand = prompt("What hand are you throwing? Rock, Paper, or scissors?")
        return humanHand;
    }

    function getComputerHand(){
        computerInt = Math.floor(Math.random() * 3);
        if (computerInt==0){
            computerHand = "rock"
            console.group(computerHand)
        }else if(computerInt==1){
            computerHand = "paper"
            console.group(computerHand)
        }else if(computerInt==2){
            computerHand = "scissors"
            console.group(computerHand)
        }
        return computerHand;
    }

    humanHand = getHumanHand();
    computerHand = getComputerHand();
    
    humanHand = humanHand.toLowerCase();
    
    function playRound(humanHand,computerHand){
        if (humanHand==computerHand){
            console.log(humanHand +" Vs " + computerHand)
            console.log("Draw")
        }else if(computerHand == "rock" && humanHand =="scissors"){
            console.log(humanHand +" Vs " + computerHand)
            console.log("Score for computer")
            computerScore ++;
        }else if(computerHand == "paper" && humanHand == "rock"){
            console.log(humanHand +" Vs " + computerHand)
            console.log("Score for computer")
            computerScore ++;
        }else if(computerHand == "scissors" && humanHand =="paper"){
            console.log(humanHand +" Vs " + computerHand)
            console.log("Score for computer")
            computerScore ++;
        }else{
            console.log(humanHand +" Vs " + computerHand)
            console.log("Score for human")
            humanScore ++;
        }
    }
playRound(humanHand,computerHand)


if(humanScore>computerScore){
    console.log("Human wins with : " + humanScore + " wins against " + computerScore)
}else if(humanScore<computerScore){
    console.log("Computer wins with : " + computerScore + " wins against " + humanScore)
}else{
    console.log("Draw between human and computer with : " + computerScore + " wins against " + humanScore)
}*/