/* eslint-disable no-unused-vars */
function vowelsCount(strings) {
  let letters = strings.split("");
  return letters.reduce(
    (acc, char) => {
      let vowels = char.toLowerCase();
      if (vowels === "a") {
        acc.a++;
        acc.total++;
      } else if (vowels === "e") {
        acc.e++;
        acc.total++;
      } else if (vowels === "i") {
        acc.i++;
        acc.total++;
      } else if (vowels === "o") {
        acc.o++;
        acc.total++;
      } else if (vowels === "u") {
        acc.u++;
        acc.total++;
      }
      return acc;
    },
    {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
      total: 0,
    }
  );
}

console.log(vowelsCount("Hello"));
