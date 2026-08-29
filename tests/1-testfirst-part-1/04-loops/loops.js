/* eslint-disable no-unused-vars */
function repeat(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function join(arr, separator = "") {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];

    if (i !== arr.length - 1) {
      str += separator;
    }
  }
  return str;
}

function gridGenerator(num) {
  let grid = "";

  for (let row = 0; row < num; row++) {
    for (let column = 0; column < num; column++) {
      if ((row + column) % 2 === 0) {
        grid += "#";
      } else {
        grid += " ";
      }
    }

    grid += "\n";
  }

  return grid;
}

console.log(gridGenerator(3));
