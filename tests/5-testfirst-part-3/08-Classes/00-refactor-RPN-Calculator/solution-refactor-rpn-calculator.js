/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/

class RPNCalculator {
  constructor() {
    this.arr = [];
  }

  push(val) {
    this.arr.push(val);
  }

  value() {
    return this.arr[this.arr.length - 1];
  }

  plus() {
    if (this.arr.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }

    let second = this.arr.pop();
    let first = this.arr.pop();

    this.arr.push(first + second);
  }

  minus() {
    if (this.arr.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }

    let second = this.arr.pop();
    let first = this.arr.pop();

    this.arr.push(first - second);
  }

  times() {
    if (this.arr.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }

    let second = this.arr.pop();
    let first = this.arr.pop();

    this.arr.push(first * second);
  }

  divide() {
    if (this.arr.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }

    let second = this.arr.pop();
    let first = this.arr.pop();

    this.arr.push(first / second);
  }
}
