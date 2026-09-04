/* eslint-disable no-unused-vars */
function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

forEach(["soccer", "swimming", "softball", "water-polo"], (sport) =>
  console.log(sport)
);

function map(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

function doubler(val) {
  return val * 2;
}
map([1, 2, 3], doubler);

function filter(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function includes(para, val) {
  if (Array.isArray(para)) {
    for (let i = 0; i < para.length; i++) {
      if (para[i] === val) {
        return true;
      }
    }
  } else if (typeof para === "object") {
    for (let key in para) {
      if (para[key] === val) {
        return true;
      }
    }
  }
  return false;
}

function countWords(startNum, str) {
  let val = str.split(" ").length + startNum;
  return val;
}

function reduce(array, startingValue, combiningFunction) {
  let total = startingValue;

  for (let i = 0; i < array.length; i++) {
    total = combiningFunction(total, array[i]);
  }

  return total;
}

function sum(arr) {
  let result = reduce(arr, 0, (a, b) => a + b);
  return result;
}

function every(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
}
