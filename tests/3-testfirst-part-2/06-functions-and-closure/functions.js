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

function makeAdder(num) {
  return function (num1) {
    return num + num1;
  };
}

function once(fun) {
  let count = 0;
  return function () {
    count++;
    if (count <= 1) {
      return fun();
    } else {
      return "the function has already been called...";
    }
  };
}

function createObjectWithClosures() {
  let value = 0;
  return {
    oneIncrementer: function () {
      value += 1;
    },
    tensIncrementer: function () {
      value += 10;
    },
    getValue: function () {
      return value;
    },
    setValue: function (num) {
      value = num;
    },
  };
}
