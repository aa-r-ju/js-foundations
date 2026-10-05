/* eslint-disable no-unused-vars */
function stringPlusPlus(str) {
  if (str === "") {
    return "1";
  }

  let i;

  for (i = str.length - 1; i >= 0; i--) {
    if (isNaN(str[i])) {
      break;
    }
  }

  if (i === str.length - 1) {
    return str + "1";
  }

  let text = str.slice(0, i + 1);
  let number = str.slice(i + 1);

  let newNumber = Number(number) + 1;
  let result = String(newNumber);

  for (; result.length < number.length; ) {
    result = "0" + result;
  }

  return text + result;
}
console.log(stringPlusPlus("movie"));
console.log(stringPlusPlus("Oceans11"));
