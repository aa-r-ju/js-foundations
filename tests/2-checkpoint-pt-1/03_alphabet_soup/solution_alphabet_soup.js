/* eslint-disable no-unused-vars, no-prototype-builtins */
function soup(phrase, characterBank) {
  let bank = characterBank;

  for (let i = 0; i < phrase.length; i++) {
    let character = phrase[i];

    let index = bank.indexOf(character);

    if (index === -1) {
      return false;
    }

    bank = bank.slice(0, index) + bank.slice(index + 1);
  }

  return true;
}
