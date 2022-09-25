let prompt = require("prompt-sync")();

const screenInputForStop = function(userPrompt = '> ') {
  const input = prompt(userPrompt).toLowerCase();
  if (input.search('stop') > -1) {
    console.log('Game stopped');
    process.exit();
  }
  return input;
};

const getMaxNumber = function() {
  let maxNum;
  console.log("What would you like the maximum number to be?");
  do {
    console.log("It must be a positive integer greater than 1.");
    maxNum = Number(screenInputForStop());
  } while (maxNum <= 1 || !Number.isInteger(maxNum));
  return maxNum;
};

const numberGuesser = function() {
  const maxNum = getMaxNumber();
  let guess;
  let guesses = [];
  let answer = Math.ceil(Math.random() * maxNum);

  do {
    console.log(`Guess a number between 1 and ${maxNum}:`);
    guess = Number(screenInputForStop());

    if (isNaN(guess)) {
      console.log('You have to guess a number!');
      continue;
    }
    if (guesses.includes(guess)) {
      console.log(`You've already guessed ${guess}!`);
      continue;
    }
    if (guess < 1 || guess > maxNum) {
      console.log(`${guess} isn't in range!`);
      continue;
    }
    guesses.push(guess);
    if (guess > answer) {
      console.log('Too high!');
      continue;
    }
    if (guess < answer) {
      console.log('Too low!');
    }
  } while (guess !== answer);

  if (guesses.length === 1) {
    console.log('You got it first try!');
  } else {
    console.log(`You got it in ${guesses.length} tries!`);
  }

  console.log('Would you like to play again? (Y/N)');
  const playAgain = screenInputForStop().toLowerCase().trim();
  if (playAgain === 'n' || playAgain === 'no') {
    console.log('Thanks for playing!');
    process.exit();
  }
  numberGuesser();
};


console.log("Welcome to number guesser!");
console.log("Enter stop at any time to exit");
numberGuesser();