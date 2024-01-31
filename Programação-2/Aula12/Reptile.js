import Animal from "./Animal.js";

export default class Reptile extends Animal {
  #isAgressive;

  constructor(data, callback) {
    super(data, callback);
    this.#isAgressive = data.isAgressive;
  }
  bite() {
    return this.#isAgressive
      ? this.introduce() + " And im agressive"
      : this.introduce() + " and im peaceful";
  }
}
