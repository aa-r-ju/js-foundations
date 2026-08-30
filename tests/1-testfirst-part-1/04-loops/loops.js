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

function paramify(obj) {
  let str = "";
  let keys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  keys = keys.sort();
  for (let j = 0; j < keys.length; j++) {
    str += keys[j] + "=" + obj[keys[j]];

    if (j !== keys.length - 1) {
      str += "&";
    }
  }

  return str;
}

function paramifyObjectKeys(obj) {
  let result = "";

  let values = Object.keys(obj).sort();

  for (let i = 0; i < values.length; i++) {
    result += values[i] + "=" + obj[values[i]];

    if (i !== values.length - 1) {
      result += "&";
    }
  }
  return result;
}

const object = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sort([17, 43, 216, 3, 9, 27]));
console.log(sort([17, -43, 216, 3, -9, 27]));
console.log(sort(["toad", "prune", "pretzel", "aardvark", "tuna", "weasel"]));
