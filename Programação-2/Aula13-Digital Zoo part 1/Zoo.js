import Bird from "./Bird.js";
import Mammal from "./Mammal.js";
import Reptile from "./Reptile.js";
import Fish from "./Fish.js";
import Inseto from "./Inseto.js";

export default class Zoo {
  #animals;
  #callback;
  #currentAnimal = null;
  constructor(callback) {
    this.#animals = [];
    this.#callback = callback;
  }

  addAnimal(animal) {
    let nextAnimal = null;

    switch (animal.type) {
      case "bird":
        nextAnimal = new Bird(animal, () => this.#performAnimal(nextAnimal));
        break;

      case "mammal":
        nextAnimal = new Mammal(animal, () => this.#performAnimal(nextAnimal));
        break;

      case "reptile":
        nextAnimal = new Reptile(animal, () => this.#performAnimal(nextAnimal));
        break;

      case "fish":
        nextAnimal = new Fish(animal, () => this.#performAnimal(nextAnimal));

      case "grilo":
        nextAnimal = new Inseto(animal, () => this.#performAnimal(nextAnimal));

      default:
        break;
    }
    this.#animals.push(nextAnimal);
  }

  #performAnimal(animal) {
    if (this.#currentAnimal) {
      this.#currentAnimal.active = false;
    }

    this.#currentAnimal = this.#animals.find(
      (anim) => anim.name === animal.name
    );
    this.#currentAnimal.active = true;

    this.#callback(animal);
  }

  showAnimals() {
    this.#animals.forEach((animal) => {
      console.log(animal.introduce());
    });
  }

  getAnimal(name) {
    return this.#animals.find((animal) => animal.name === name);
  }

  static ZooInfo() {
    return "A zoo is a place to display animals";
  }
}
