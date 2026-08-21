/* eslint-disable no-unused-vars */
function setPropsOnObj(obj) {
  obj.x = 7;
  obj.y = 8;
  obj.onePlus = function (num) {
    return num + 1;
  };
}

function setPropsOnArr(arr) {
  arr.hello = function () {
    return "Hello!";
  };

  arr.full = "stack";
  arr[0] = 5;
  arr.twoTimes = function (para) {
    return para * 2;
  };
}

function setPropsOnFunc(fun) {
  fun.year = "20??";
  fun.divideByTwo = function (num) {
    return num / 2;
  };
}

function shallowCopy(para1, para2) {
  if (Array.isArray(para1) && Array.isArray(para2)) {
    return [...para1, ...para2];
  }

  if (typeof para1 === "object" && typeof para2 === "object") {
    return { ...para1, ...para2 };
  }
}
