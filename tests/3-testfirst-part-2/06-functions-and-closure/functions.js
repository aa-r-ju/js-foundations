/* eslint-disable no-unused-vars */
function concatString() {
  let value = Array.from(arguments);
  let result = "";
  for (let i = 0; i < value.length; i++) {
    if (i !== value.length - 1 || value[i] !== " ") {
      result += value[i];
    }
  }
  return result;
}
console.log(concatString("David", " ", "Yang"));
console.log(concatString("This", " ", "should", " ", "be done with join"));
