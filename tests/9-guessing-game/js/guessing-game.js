/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/
function generateWinningNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

class Game {
  constructor(winningNumber) {
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = generateWinningNumber();
  }
  difference() {
    if (this.playersGuess - this.winningNumber > 0) {
      return this.playersGuess - this.winningNumber;
    }

    if (this.winningNumber - this.playersGuess > 0) {
      return this.winningNumber - this.playersGuess;
    }
  }
  isLower() {
    if (this.playersGuess < this.winningNumber) {
      return true;
    }
    return false;
  }
}

let kk = new Game(800, [], 600);
console.log(kk);
