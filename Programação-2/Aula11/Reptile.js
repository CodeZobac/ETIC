import Animal from "./Animal.js";

export default class Reptile extends Animal {
  #agressive;
  constructor({ name, agressive }) {
    super(name);
    this.#agressive = agressive;
  }
  bite() {
    return this.#agressive
      ? console.log(introduce() + " And im agressive")
      : console.log(this.introduce() + " and im peaceful");
  }
}
