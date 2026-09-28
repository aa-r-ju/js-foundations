/* eslint-disable no-unused-vars, no-extend-native */
Array.prototype.doNotInclude = function (index) {
  return this.filter((val, indx) => {
    if (Array.isArray(index)) {
      return !index.includes(indx);
    }
    return index !== indx;
  });
};
