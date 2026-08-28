/* eslint-disable no-unused-vars */
function repeat(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(repeat("yo", 0));
console.log(repeat("yo", 1));
console.log(repeat("yo", 2));
console.log(repeat("yo", 3));
