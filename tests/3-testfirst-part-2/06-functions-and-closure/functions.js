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

function yourFunctionRunner() {
  let value = Array.from(arguments);
  let returnedValue = "";

  for (let i = 0; i < value.length; i++) {
    let result = value[i]();
    returnedValue += result;
  }
  return returnedValue;
}

const callThisFunction = () => {
  return "Called Value";
};

const andThisFunction = () => {
  return " and Other Value";
};

console.log(yourFunctionRunner(callThisFunction, andThisFunction));
