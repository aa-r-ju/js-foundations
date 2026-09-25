function interleave(...args) {
  let result = "";

  let longest = 0;

  for (let i = 0; i < args.length; i++) {
    if (args[i].length > longest) {
      longest = args[i].length;
    }
  }

  for (let j = 0; j < longest; j++) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i][j]);
      if (j < args[i].length) {
        result += args[i][j];
      }
    }
  }

  return result;
}
console.log(interleave("hello", "WORLD"));
