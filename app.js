// import functions and grab DOM elements
import { answers } from "./answers.js";
// initialize global state
const getRandomNumber = (max)=> {
  return answers[Math.floor(math.random()*answers.length)]
};

const inputQuestion = document.getElementById('input-question');
const answerButton = document.getElementById('answer-button');
const randomAnswer = document.getElementById('random-answer');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
