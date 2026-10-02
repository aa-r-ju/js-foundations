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

function recSmallestInt() {}

function fib() {}

function stringify() {}

function search() {}

function recursiveMap() {}
