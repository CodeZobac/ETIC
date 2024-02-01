import Animal from "./Animal.js";

export default class Mamal extends Animal {
  #numLegs;
  constructor(data, callback) {
    super(data, callback);
    this.#numLegs = data.numLegs;
  }
  walk() {
    return this.introduce() + " walking on " + this.#numLegs + " legs";
  }
}
