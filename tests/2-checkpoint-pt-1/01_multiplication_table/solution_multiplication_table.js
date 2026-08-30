/* eslint-disable no-unused-vars */
function multiplicationTable(row, column) {
  let arr = [];

  for (let i = 1; i <= row; i++) {
    let temp = [];
    for (let j = 1; j <= column; j++) {
      temp.push(j * i);
    }
    arr.push(temp);
  }
  return arr;
}
