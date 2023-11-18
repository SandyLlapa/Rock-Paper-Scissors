let choice_content;
let winner;
let player=0;
let computer=0;
let round=1;
const gameOptions = document.querySelectorAll('div.options');
gameOptions.forEach(button => {button.addEventListener('click',getPlayerChoice)});

const computerScore = document.querySelector('.num1');
const userScore = document.querySelector('.num2');
const winnerResult = document.querySelector('.winner');



function getRandomNumber(min,max){
  let num = Math.floor((Math.random() * max) + min);

  return num;
}

function getComputerChoice(){
  let choice = getRandomNumber(1,3);


  if (choice==1){
    return "Rock";
  }
  else if(choice==2){
    return "Paper";
  }
  else{
    return "Scissors";
  }
}


function playRound(playerSelection, computerSelection){
  let player = playerSelection.toLowerCase();

  let computer = computerSelection.toLowerCase();


  switch(player){
    case computer:
      winnerResult.textContent="Its a tie!";
      return "Its a tie!";

    case "rock":
      if (computer=="paper"){
        winnerResult.textContent='You lose, Paper beats Rock';
        return 'You lose, Paper beats Rock';
      }

      else if (computer=="scissors"){
        winnerResult.textContent="You win, Rock beats Scissors!";
        return "You win, Rock beats Scissors!"; 
      }

    case "paper":
      if (computer=="scissors"){
        winnerResult.textContent="You lose, Scissors beats Paper";
        return "You lose, Scissors beats Paper";
      }

      else if (computer=="rock"){
        winnerResult.textContent="You lose, Scissors beats Paper";
        return "You lose, Scissors beats Paper";
      }


    case "scissors":
      if (computer=="rock"){
        winnerResult.textContent="You lose, Rock beats Scissors";
        return "You lose, Rock beats Scissors";
      }

      else if (computer=="paper"){
        winnerResult.textContent="You win, Scissors beats Paper!";
        return "You win, Scissors beats Paper!";
      }
  }
}



function game(){

  let computerSelection= getComputerChoice();

  let play=playRound(choice_content, computerSelection);

  console.log(play);
  if (play =='You lose, Paper beats Rock' || play=="You lose, Scissors beats Paper"||play=="You lose, Rock beats Scissors"){
    computer++;
    round++;
    computerScore.textContent=computer;
  }
  else if(play=="You win, Rock beats Scissors!"||play=="You win, Paper beats Rock!" || play=="You win, Scissors beats Paper!"){
    player++;
    round++;
    userScore.textContent=player;

  }
  if(round==6){
    endGame();
  }
  return;
}

function endGame(){
  if(player>computer){
    winnerResult.textContent="YOU WON THE GAME";
  }
  else{
    winnerResult.textContent="YOU LOST THE GAME, WHAT A LOSER ";

  }
  gameOptions.forEach(button => {button.removeEventListener('click', getPlayerChoice);}); // any clicks made on the buttons will no longer work.
  return;

}

function getPlayerChoice(e){ // once the game() is running, it does not ask again for the user choice -> fix this 
  // let choice=e.target;
  // console.log(choice); // prints <button> ROCK/PAPER/SCISSORS  </button>
  choice_content=e.target.textContent;
  choice_content=choice_content.toString();

  // console.log(typeof choice_content);
  game();
  // console.log(choice_content);  // prints the contents of the button  class
  return;
}



