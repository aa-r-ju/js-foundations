/* eslint-disable no-unused-vars */
class Laptop {
  constructor(year, size) {
    this.year = year;
    this.hd = size;
  }

  checkSpecs() {
    return `Year: ${this.year}, HD: ${this.hd}`;
  }
}

let kk = new Laptop(1005, 500);
console.log(kk.checkSpecs());
