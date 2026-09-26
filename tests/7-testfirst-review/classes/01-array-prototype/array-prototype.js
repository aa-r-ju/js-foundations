/* eslint-disable no-unused-vars */
Array.prototype.maap = function (callback) {
  let result = [];

  this.forEach(function (val) {
    result.push(callback(val));
  });
  return result;
};

Array.prototype.fiilter = function (callbacks) {
  let filteredValue = [];

  this.forEach(function (val) {
    if (callbacks(val)) {
      filteredValue.push(val);
    }
  });
  return filteredValue;
};
