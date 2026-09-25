/* eslint-disable no-unused-vars */
function multipleMaps(arrA, arrB) {
  return arrA.map((val) => {
    for (let i = 0; i < arrB.length; i++) {
      if (val in arrB[i]) {
        return arrB[i][val];
      }
    }
  });
}
