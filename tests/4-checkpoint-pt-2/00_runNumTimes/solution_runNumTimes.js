/* eslint-disable no-unused-vars */
function runNumTimes(fn, runTimes) {
  for (let i = 0; i < runTimes; i++) {
    fn();
  }
}

let myString = "";

runNumTimes(() => {
  myString += "hello";
  return myString;
}, 3);

console.log(myString);
