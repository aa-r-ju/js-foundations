/* eslint-disable no-unused-vars */
function procrastinator(str) {
  let count = 0;
  return function () {
    let char = str[count];

    count = (count + 1) % str.length;
    return char;
  };
}
