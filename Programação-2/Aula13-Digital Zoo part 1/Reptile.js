import Animal from "./Animal.js";

export default class Reptile extends Animal {
  #isAgressive;

  constructor(data, callback) {
    super(data, callback);

    this.#isAgressive = data.isAgressive;
  }

  introduce() {
    let parentIntroduce = super.introduce();
    return this.#isAgressive
      ? parentIntroduce + " and I'm agressive'"
      : parentIntroduce + " and I'm peacefull";
  }
}
