// All of the recursive functions are pre-defined for you. Keep in mind, you need to determine
// their arguments! Keep in mind, there are a few test specs that require functions that are not solved
// recursively (you need to define those functions on your own).

/* eslint-disable no-unused-vars */
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

function sumTheDigits(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumTheDigits(arr.slice(1));
}

function countTheVowels(str) {
  let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (str.length === 0) {
    return 0;
  }
  if (arr.includes(str[0])) {
    return 1 + countTheVowels(str.slice(1));
  }
  return countTheVowels(str.slice(1));
}

function recSmallestInt(arr) {
  if (arr.length === 1) {
    return arr[arr.length - 1];
  }
  let smallest = recSmallestInt(arr.slice(1));
  if (arr[0] < smallest) {
    return arr[0];
  }
  return smallest;
}
function fib(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

function type(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

function stringify(value) {
  if (Array.isArray(value)) {
    let result = "[";

    for (let i = 0; i < value.length; i++) {
      result += stringify(value[i]);

      if (i < value.length - 1) {
        result += ",";
      }
    }

    result += "]";
    return result;
  }

  if (value !== null && typeof value === "object") {
    let result = "{";
    let keys = Object.keys(value);

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];

      result += `"${key}":${stringify(value[key])}`;

      if (i < keys.length - 1) {
        result += ",";
      }
    }

    result += "}";
    return result;
  }

  if (typeof value === "string") {
    return `"${value}"`;
  }

  if (value === null) {
    return "null";
  }

  return String(value);
}

function search(matchingFunction) {
  for (let i = 0; i < this.length; i++) {
    const value = this[i];

    if (Array.isArray(value)) {
      if (search.call(value, matchingFunction)) {
        return true;
      }
    } else {
      if (matchingFunction(value)) {
        return true;
      }
    }
  }

  return false;
}

function recursiveMap() {}
