/* eslint-disable no-unused-vars */
function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

forEach(["soccer", "swimming", "softball", "water-polo"], (sport) =>
  console.log(sport)
);
