/* eslint-disable no-unused-vars, no-prototype-builtins */
function keyAdder() {
  let total = 0;

  for (let keys in this) {
    if (this.hasOwnProperty(keys) && typeof this[keys] === "number") {
      total += this[keys];
    }
  }
  return total;
}
