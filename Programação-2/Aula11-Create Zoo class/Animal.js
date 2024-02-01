export default class Animal {
  #name;
  #fly;
  constructor(name, fly) {
    this.#name = name;
    this.#fly = fly;
  }
  introduce() {
    return "Hello, I'm a " + this.#name;
  }
}
