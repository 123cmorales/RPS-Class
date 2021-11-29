// VARIABLES
let userChoice; // get value from button click
let compChoice; // random choice of R/P/S
let userScore = 0, compScore = 0; //keeps tracks of dubs/Ls
// Maybe reslut variable?

// startup functionality *NOT A IN FUNCTION*
// 1. Add event Listners to all 3 buttons
// 2. Onclick call getInput function
document.getElementById("rock").addEventListner("click", function (){
  getInput(this.id);
});
document.getElementById("paper").addEventListner("click", function (){
  getInput(this.id);
});
document.getElementById("scissor").addEventListner("click", function (){
  getInput(this.id);
});

// Get input (User's Choice of RPS)
function getInput(choice)
{
  userChoice = choice;
  //console.log(choice);
}

// Get random computer's choice of RPS
function getRandomChoice()
{
  //randomly chose 1 of 3 options
}

//comparing user vs comp choices
function compareChoices()
{
  // switch statments for ALL possiblities
}

// Display the round's winner
function displayReslut()
{
  // get html element to display text
  // assign sting value
}

// Keep Score
function keepScore()
{
  // increment user or comp score based on round winner
  // update score on screen
}

// Reset Score
function resetScore()
{
  // set user or comp score to zer0
  // update score on screen
}
