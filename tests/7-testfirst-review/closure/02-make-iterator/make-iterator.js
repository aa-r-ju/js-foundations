/* eslint-disable no-unused-vars */
function makeIterator(arr) {
  let indexCount = 0;

  return {
    getNext() {
      if (indexCount >= arr.length) {
        return {
          value: undefined,
          done: true,
        };
      }

      const result = {
        value: arr[indexCount],
        done: false,
      };

      indexCount++;

      return result;
    },

    getIndex() {
      return indexCount;
    },
  };
}
