/* eslint-disable no-unused-vars */
function callAll(obj, arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].call(obj));
  }
  return result;
}
