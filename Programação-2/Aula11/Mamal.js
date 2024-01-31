import Animal from "./Animal.js";

export default class Mamal extends Animal {
  #legs;
  constructor(name, legs) {
    super(name);
    this.#legs = legs;
  }
  walk() {
    return this.introduce() + " walking on " + this.#legs + " legs";
  }
}
