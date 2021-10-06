// import functions and grab DOM elements
import { answers } from "./answers.js";
// initialize global state
const getRandomNumber = (max) => {
  return answers[Math.floor(Math.random() * answers.length)];
};

const inputQuestion = document.getElementById('input-question');
const answerButton = document.getElementById('answer-button');
const randomAnswer = document.getElementById('random-answer');
const resetButton = document.getElementById('reset-button');

function shake() {
  console.log(answerButton);
  answerButton.classList.add('shake');
  setTimeout(function () { answerButton.classList.remove('shake'); }, 1000)
  console.log(answerButton);
};


answerButton.addEventListener('click', () => {
  // //function shake () {
  //   var answerButton = document.getElementById("answer-button")
  //  console.log(answerButton);
  // answerButton.classList.add('shake')
  // //setTimeout(function(){answerButton.classList.remove('shake');}, 1000 )
  // console.log(answerButton);
  // }

  shake();

  const randomIndex = getRandomNumber(answers.length);
  randomAnswer.textContent = randomIndex;

  //console.log(randomIndex)
});

resetButton.addEventListener('click', () => {
  randomAnswer.textContent = '';
  inputQuestion.value = '';
});



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
