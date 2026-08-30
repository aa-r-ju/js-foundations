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
