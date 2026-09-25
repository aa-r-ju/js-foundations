/* eslint-disable no-unused-vars */
// class Vehicle {
//   constructor(arr) {
//     this.wheelTotal = arr[0];
//     this.energySource = arr[1];
//     this.manufacturer = arr[2];
//     this.isOn = false;
//   }

//   getSpec(key) {
//     return this[key];
//   }
// }

class Vehicle {
  constructor(arr) {
    this.wheelTotal = arr[0];
    this.energySource = arr[1];
    this.manufacturer = arr[2];
    this.isOn = false;
  }

  getSpec(key) {
    if (this.hasOwnProperty(key)) {
      return this[key];
    }

    return undefined;
  }
}
let kk = new Vehicle([2, "gas", "Harly-Davidson"]);
console.log(kk.getSpec("energySource"));
