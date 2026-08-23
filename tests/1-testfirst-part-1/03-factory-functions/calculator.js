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

function addSquareMethod(instances) {
  for (let i = 0; i < instances.length; i++) {
    instances[i].square = function () {
      return instances[i].value() * instances[i].value();
    };
  }

  return instances;
}
let result = createCalculator();
console.log(addSquareMethod([result][0]));
