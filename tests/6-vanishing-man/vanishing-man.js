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
}
