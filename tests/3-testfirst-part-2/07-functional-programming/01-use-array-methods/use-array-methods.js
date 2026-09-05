/* eslint-disable no-unused-vars */
function indexAndValue(arr) {
  return arr.map((value, index) => {
    return { index: index, value: value };
  });
}
function capitalize(str) {
  return str.toUpperCase();
}

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

function extensionSearch(str, arr) {
  return arr.filter((val) => {
    return val.endsWith(str);
  });
}

console.log(
  extensionSearch("txt", [
    "hello.txt",
    "hello.png",
    "hell.csv",
    "mlb.txt",
    "mls.png",
  ])
);
