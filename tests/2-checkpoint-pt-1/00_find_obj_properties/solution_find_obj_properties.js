/* eslint-disable no-unused-vars, no-prototype-builtins */
function findObjPropsHasOwn(obj) {
  let result = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (result !== "") {
        result += ", ";
      }
      result += key;
    }
  }
  return result;
}

function findObjKeys(obj) {
  let str = "";

  let values = Object.keys(obj);
  for (let i = 0; i < values.length; i++) {
    if (str !== "") {
      str += ", ";
    }
    str += values[i];
  }
  return str;
}
