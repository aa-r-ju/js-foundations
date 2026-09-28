/* eslint-disable no-unused-vars, no-prototype-builtins */
function alternate(func) {
  let count = 0;
  return function () {
    count++;
    if (count % 2 !== 0) {
      return func();
    }
  };
}

function twice(func) {
  let count = 0;
  return function () {
    if (count < 2) {
      count++;
      return func();
    }
    return 0;
  };
}
const returnTen = twice(() => {
  return 10;
});
