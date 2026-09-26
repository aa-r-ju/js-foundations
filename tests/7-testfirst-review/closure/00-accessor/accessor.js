/* eslint-disable no-unused-vars */
function accessor(obj) {
  return function (value, resetValue) {
    if (resetValue === undefined) {
      return obj[value];
    }
    obj[value] = resetValue;
    return resetValue;
  };
}
