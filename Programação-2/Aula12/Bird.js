import Animal from "./Animal.js";

export default class Bird extends Animal {
  #canFly;
  constructor(data, callback) {
    super(data, callback);

    this.#canFly = data.canFly;
  }

  fly() {
    return this.#canFly
      ? this.introduce() + "and i can fly"
      : this.introduce() + "and i can´t fly";
  }
}
