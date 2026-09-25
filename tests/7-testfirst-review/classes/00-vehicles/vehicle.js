/* eslint-disable no-unused-vars */
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

class Tesla extends Vehicle {
  constructor(arr) {
    super(arr[4][0]);

    this.milesPerCharge = arr[0];
    this.model = arr[1];
    this.chargePercentage = arr[2];
    this.minutesToCharge = arr[3];
  }

  minutesToFullCharge(currentCharge) {
    let remainingCharge = 100 - currentCharge;

    return `${remainingCharge} minutes until the charge is full!`;
  }
}
let teslaCar = new Tesla([300, "Model S", 50, 100, [[4, "electric", "Tesla"]]]);
console.log(teslaCar);
