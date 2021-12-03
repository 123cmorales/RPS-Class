// VARIABLES
let userChoice; // get value from button click
let compChoice; // random choice of R/P/S
let userScore = 0, compScore = 0; //keeps tracks of dubs/Ls
let resultMessage;
// Maybe reslut variable?
// startup functionality *NOT A IN FUNCTION*
// 1. Add event Listners to all 3 buttons
// 2. Onclick call getInput function
document.getElementById("rock").addEventListener("click", function (){
  getInput(this.id);
});
document.getElementById("paper").addEventListener("click", function (){
  getInput(this.id);
});
document.getElementById("scissors").addEventListener("click", function (){
  getInput(this.id);
});

// Get input (User's Choice of RPS)
function getInput(choice)
{
  userChoice = choice;
  //console.log(choice);
  getRandomChoice();
}

// Get random computer's choice of RPS
function getRandomChoice()
{
  //randomly chose 1 of 3 options
  compChoice = Math.floor(Math.random() * 3); // sets compChoice equal to 0 1 or 2
  // 0 is rock
  // 1 is paper
  //2 is scissors
//  console.log(compChoice);
compareChoices();
}

//comparing user vs comp choices
function compareChoices()
{

  // switch statments for ALL possiblities
  switch (userChoice + compChoice)
  {
    case "scissors2":// scissors vs scissors
    case "paper1": // paper vs paper
    case "rock0": // rock vs rock
    resultMessage = "Draw!";
      break;
      case "paper2":// paper vs scissors
      case "scissors0": // scissors vs rock
      case "rock1": // rock vs paper
      resultMessage = "You Lose :(";
      updateScore("comp");
        break;
        case "scissors1": // scissors vs paper
        case "paper0": // paper vs rock
        case "rock2":// rock vs scissors
        resultMessage = "You Win!";
        updateScore("user");
          break;
            default:
            resultMessage = "something went wrong...";
  }

  displayReslut();
}

// Display the round's winner
function displayReslut()
{
  // get html element to display text and assign resultMessage to it
  document.getElementById("result").textContent = resultMessage;
}

// Update Score
function updateScore(winner)
{
  if(winner == "user")
  {
    userScore++;
  }
  else
  {
    compScore++;
  }
  // increment user or comp score based on round winner
  // update score on screen
  winner++;
  document.getElementById("score").innerHTML = (compScore + ":" + userScore);
}
