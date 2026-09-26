/* eslint-disable no-unused-vars */
class MyEventEmitter {
  constructor() {
    this.events = {};
  }
  addListener(name, callbacks) {
    if (name in this.events) {
      this.events[name].push(callbacks);
    } else {
      this.events[name] = [callbacks];
    }
  }

  emit(funName, ...arg) {
    let result = "";
    if (funName in this.events) {
      for (let i = 0; i < this.events[funName].length; i++) {
        result += this.events[funName][i](...arg);
      }
    }
    return result;
  }
}
let kk = new MyEventEmitter();
console.log(
  kk.addListener("greet", (name) => {
    return "Hello, " + name + "!";
  })
);
kk.addListener("greet", () => {
  return "How are you?";
});
kk.addListener("bye", (name) => {
  return "Bye, " + name + "!";
});
console.log(kk);

let pp = kk.emit("greet", "Emily");
console.log(pp);
