/* eslint-disable no-unused-vars */
function mapQuest(arr) {
  return arr.reduce((result, current) => {
    let last = result[result.length - 1];
    if (
      (last === "E" && current === "W") ||
      (last === "W" && current === "E") ||
      (last === "S" && current === "N") ||
      (last === "N" && current === "S")
    ) {
      result.pop();
    } else {
      result.push(current);
    }
    return result;
  }, []);
}

console.log(mapQuest(["S", "E", "W", "W"]));
