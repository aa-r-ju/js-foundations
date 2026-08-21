/* eslint-disable no-unused-vars */
function createCalculator() {
  let total = 0;
  return {
    value: function () {
      return total;
    },
    add: function (value) {
      return (total += value);
    },
    subtract: function (value) {
      return (total -= value);
    },
    clear: function () {
      total = 0;
    },
  };
}

let result = createCalculator();
console.log(result);
console.log(result.add(5));
console.log(result.add(5));
console.log(result.subtract(3));
