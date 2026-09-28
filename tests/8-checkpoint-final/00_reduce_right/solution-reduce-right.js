/* eslint-disable no-unused-vars, no-prototype-builtins */
function reduceRight(arr, startingPoint, func) {
  let result = startingPoint;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = func(result, arr[i]);
  }
  return result;
}
const stringConcat = (prev, curr) => {
  return prev + curr;
};

const reducedResult = reduceRight(["o", "l", "l", "e", "h"], "", stringConcat);
console.log(reducedResult);
