/* eslint-disable no-unused-vars, no-prototype-builtins */
function aQuarter(func) {
  let count = 1;
  return function (...args) {
    if (count % 4 !== 0) {
      count++;
      return `something went wrong :/`;
    }
    count++;
    return func(...args);
  };
}
