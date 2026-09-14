/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];

class VanishingMan {
  constructor(value) {
    this.value = value;
    this.secretWord = this.value.split("");
    this.remainingGuesses = 6;
    this.lettersGuessed = [];
    this.gameState = "playing";
  }

  submitGuess(char) {
    if (this.gameState !== "playing") {
      return;
    }

    const small = char.toLowerCase();

    if (this.lettersGuessed.includes(small)) {
      return;
    }

    this.lettersGuessed.push(small);

    if (!this.secretWord.includes(small)) {
      this.remainingGuesses -= 1;
    }
  }

  computeGameState() {
    if (this.remainingGuesses === 0) {
      this.gameState = "lost";
      return;
    }

    let allGuessed = true;

    for (let i = 0; i < this.secretWord.length; i++) {
      if (!this.lettersGuessed.includes(this.secretWord[i])) {
        allGuessed = false;
        break;
      }
    }

    if (allGuessed) {
      this.gameState = "won";
    }
  }
  getSecretWordPuzzle() {
    let puzzle = "";

    for (let i = 0; i < this.secretWord.length; i++) {
      const letter = this.secretWord[i];

      if (letter === " ") {
        puzzle += " ";
      } else if (this.lettersGuessed.includes(letter)) {
        puzzle += letter;
      } else {
        puzzle += "#";
      }
    }

    return puzzle;
  }
}
