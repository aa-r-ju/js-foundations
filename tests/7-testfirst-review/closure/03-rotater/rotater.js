/* eslint-disable no-unused-vars */
function rotater(str) {
  let direction = "left";

  return function (num) {
    if (str.length === 0) {
      return "";
    }

    if (num === str.length) {
      direction = direction === "left" ? "right" : "left";
      return str;
    }

    let val = num % str.length;

    if (direction === "left") {
      return str.slice(val) + str.slice(0, val);
    }

    return str.slice(-val) + str.slice(0, -val);
  };
}
