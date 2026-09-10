/* eslint-disable no-unused-vars */
class Mammal {
  constructor(name) {
    this.name = name;
    this.offspring = [];
  }

  sayHello() {
    return `My name is ${this.name}, I'm a ${this.constructor.name}`;
  }

  haveBaby() {
    let child = new Mammal(`Baby ${this.name}`);

    this.offspring.push(child);

    return child;
  }
}

class Cat extends Mammal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    return "meow";
  }

  haveBaby(color) {
    let child = new Cat(`Baby ${this.name}`, color);

    this.offspring.push(child);

    return child;
  }
}
