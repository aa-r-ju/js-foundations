/* eslint-disable no-unused-vars, no-throw-literal*/

function RPNCalculator() {
  this.stack = [];
}

RPNCalculator.prototype.push = function (number) {
  this.stack.push(number);
};

RPNCalculator.prototype.plus = function () {
  if (this.stack.length < 2) {
    throw "rpnCalculatorInstance is empty";
  }

  const right = this.stack.pop();
  const left = this.stack.pop();

  this.stack.push(left + right);
};

RPNCalculator.prototype.minus = function () {
  if (this.stack.length < 2) {
    throw "rpnCalculatorInstance is empty";
  }

  const right = this.stack.pop();
  const left = this.stack.pop();

  this.stack.push(left - right);
};

RPNCalculator.prototype.times = function () {
  if (this.stack.length < 2) {
    throw "rpnCalculatorInstance is empty";
  }

  const right = this.stack.pop();
  const left = this.stack.pop();

  this.stack.push(left * right);
};

RPNCalculator.prototype.divide = function () {
  if (this.stack.length < 2) {
    throw "rpnCalculatorInstance is empty";
  }

  const right = this.stack.pop();
  const left = this.stack.pop();

  this.stack.push(left / right);
};

RPNCalculator.prototype.value = function () {
  return this.stack[this.stack.length - 1];
};
