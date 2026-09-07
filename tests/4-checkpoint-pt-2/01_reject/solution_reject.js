/* eslint-disable no-unused-vars */
function reject(arrOfValues, fn) {
  let newArr = [];
  for (let i = 0; i < arrOfValues.length; i++) {
    if (!fn(arrOfValues[i])) {
      newArr.push(arrOfValues[i]);
    }
  }
  return newArr;
}
