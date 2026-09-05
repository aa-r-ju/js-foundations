/* eslint-disable no-unused-vars */
function indexAndValue(arr) {
  return arr.map((value, index) => {
    return { index: index, value: value };
  });
}
function capitalize(str) {
  return str.toUpperCase();
}

function swapCase(sentence) {
  let arr = sentence.split(" ");
  let result = arr.map((val, index) => {
    if (index % 2 === 0) {
      return capitalize(val);
    } else {
      return val;
    }
  });

  return result.join(" ");
}

function extensionSearch(str, arr) {
  return arr.filter((val) => {
    return val.endsWith(str);
  });
}

function getPopulation(arrayOfObj, arrayOfCountry) {
  let all = arrayOfObj.reduce((acc, curr) => {
    if (arrayOfCountry.length === 0) {
      return (acc += curr.population);
    }
    for (let i = 0; i < arrayOfCountry.length; i++) {
      if (curr.name === arrayOfCountry[i]) {
        acc += curr.population;
      }
    }
    return acc;
  }, 0);
  return all;
}

function keyifyArrayOfObjects(name, arr) {
  return arr.reduce((acc, curr) => {
    if (name in curr) {
      let key = curr[name];
      acc[key] = curr;
    }
    return acc;
  }, {});
}
