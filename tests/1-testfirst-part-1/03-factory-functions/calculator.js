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

const humanCalculatorPrototype = {
  add: function (value) {
    this.total += value;
  },

  subtract: function (value) {
    this.total -= value;
  },

  value: function () {
    return this.total;
  },

  clear: function () {
    this.total = -10;
  },
};

function createHumanCalculator() {
  const humanCalculator = Object.create(humanCalculatorPrototype);

  humanCalculator.total = -10;

  return humanCalculator;
}

// let kk = Object.create(createCalculator);
// console.log(kk);
console.log(createHumanCalculator());
let kk = createCalculator();
console.log(kk.add(2));
