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
function powerLevelAverage(arr) {
  let all = arr.reduce((acc, curr) => {
    return (acc += curr.powerLevel);
  }, 0);
  return Math.round(all / arr.length);
}

function mapReduce(arr, fn) {
  return arr.reduce((acc, curr) => {
    let result = fn(curr);
    acc.push(result);
    return acc;
  }, []);
}

function filterReduce(arr, fn) {
  return arr.reduce((acc, curr) => {
    let result = fn(curr);
    if (result) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

function inYourBudget(budget, arr) {
  return arr.filter((val) => val.price <= budget).map((val) => val.item);
}

function separateAndReturnNames(superheroes, name, lengthNum) {
  let mapped = superheroes.map((val) => {
    let arr = val.name.split(" ");
    val.firstName = arr[0];
    val.lastName = arr[1];
    return val;
  });
  let filtered = mapped.filter((val) => {
    return val[name].length <= lengthNum;
  });

  return filtered.map((val) => {
    return val[name];
  });
}
