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
