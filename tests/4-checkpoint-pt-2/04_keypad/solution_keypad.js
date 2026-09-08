/* eslint-disable no-unused-vars */
const keypad = {
  a: 1,
  b: 2,
  c: 3,

  d: 1,
  e: 2,
  f: 3,

  g: 1,
  h: 2,
  i: 3,

  j: 1,
  k: 2,
  l: 3,

  m: 1,
  n: 2,
  o: 3,

  p: 1,
  q: 2,
  r: 3,
  s: 4,

  t: 1,
  u: 2,
  v: 3,

  w: 1,
  x: 2,
  y: 3,
  z: 4,

  " ": 1,
  1: 1,
};

function presses(sentence) {
  let totalPressed = 0;
  for (let i = 0; i < sentence.length; i++) {
    let val = sentence[i].toLowerCase();
    totalPressed += keypad[val];
  }
  return totalPressed;
}
