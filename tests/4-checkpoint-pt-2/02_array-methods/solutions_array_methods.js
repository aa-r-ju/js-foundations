/* eslint-disable no-unused-vars */
function useMapToUpperCase(str) {
  let arrayStr = str.split(" ");
  return arrayStr.map((val) => {
    return val.toUpperCase();
  });
}

function useFilter(arr) {
  return arr.filter((val) => {
    return val.includes("@");
  });
}

function sumWithReduce(arr, startingValue = 0) {
  return arr.reduce((acc, curr) => {
    return (acc += curr);
  }, startingValue);
}
