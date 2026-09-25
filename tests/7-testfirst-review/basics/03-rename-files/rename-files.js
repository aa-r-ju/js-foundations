/* eslint-disable no-unused-vars */
function renameFiles(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    } else {
      for (let count = 1; count < arr.length; count++) {
        let newName = arr[i] + "(" + count + ")";

        if (!newArr.includes(newName)) {
          newArr.push(newName);
          break;
        }
      }
    }
  }

  return newArr;
}
console.log(renameFiles(["file", "fileTwo", "fileThree", "fileFour"]));
console.log(renameFiles(["FullstackTestFirst", "GuessingGame", "FileWatcher"]));
console.log(renameFiles(["hello", "world", "hello"]));
console.log(
  renameFiles([
    "a(1)",
    "a(6)",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
  ])
);
