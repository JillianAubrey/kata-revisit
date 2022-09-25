let prompt = require("prompt-sync")();

console.log("Welcome to number guesser!");
console.log("Enter stop at any time to exit");

const screenInputForStop = function(userPrompt = '> ') {
  const input = prompt(userPrompt).toLowerCase().trim();
  if (input === 'stop') {
    console.log('Game stopped');
    process.exit()
  }
  return input;
}

const getMaxNumber = function (){
  let maxNum;
  console.log("What would you like the maximum number to be?")
  do {
    console.log("It must be a positive integer greater than 1.")
    maxNum = Number(screenInputForStop());
  } while (maxNum <= 1 || !Number.isInteger(maxNum));
}

getMaxNumber();