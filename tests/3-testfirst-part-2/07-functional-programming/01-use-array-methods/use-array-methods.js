/* eslint-disable no-unused-vars */
function indexAndValue(arr) {
  return arr.map((value, index) => {
    return { index: index, value: value };
  });
}
function capitalize(str) {
  return str.toUpperCase();
}
console.log(capitalize("hello world"));

function swapCase(sentence) {
  let arr = sentence.split(" ");
  let result = arr.map((val, index) => {
    if (index % 2 === 0) {
      return capitalize(val);
    } else {
      return val;
    }
  });

  return result.join(" ");
}

console.log(swapCase("i am going to the movies today"));
