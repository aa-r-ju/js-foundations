/* eslint-disable no-unused-vars */
function useMapToUpperCase(str) {
  let arrayStr = str.split(" ");
  return arrayStr.map((val) => {
    return val.toUpperCase();
  });
}
