/* eslint-disable no-unused-vars */
function sometimes(func) {
  let count = 0;

  return function (...args) {
    count++;

    if (count <= 3) {
      return func(...args);
    }

    if (count % 2 === 1) {
      return func(...args);
    }

    return "I do not know!";
  };
}
