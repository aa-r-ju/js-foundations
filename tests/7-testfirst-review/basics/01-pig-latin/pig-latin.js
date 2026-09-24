/* eslint-disable no-unused-vars */

function pigify(strings) {
  let vowels = "aeiou";
  let words = strings.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    for (let j = 0; j < word.length; j++) {
      if (word[j] === "q" && word[j + 1] === "u") {
        let firstPart = word.slice(0, j + 2);
        let secondPart = word.slice(j + 2);

        result += secondPart + firstPart + "ay";
        break;
      }

      if (vowels.includes(word[j].toLowerCase())) {
        let firstPart = word.slice(0, j);
        let secondPart = word.slice(j);

        result += secondPart + firstPart + "ay";
        break;
      }
    }

    if (i !== words.length - 1) {
      result += " ";
    }
  }

  return result;
}

// console.log(pigify("apple"));
// console.log(pigify("banana"));
// console.log(pigify("cherry"));
// console.log(pigify("eat pie"));
// console.log(pigify("three"));
// console.log(pigify("school"));
// console.log(pigify("quiet"));
console.log(pigify("square"));
