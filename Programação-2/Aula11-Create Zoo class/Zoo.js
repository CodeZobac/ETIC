import Bird from "./Bird.js";
import Mamal from "./Mamal.js";
import Reptile from "./Reptile.js";

export default class Zoo {
  #animals;
  constructor() {
    this.#animals = [];
  }
  addAnimal(animal) {
    switch (animal.type) {
      case "bird":
        this.#animals.push(new Bird(item.name, item.canFly));
        break;
      case "mamal":
        this.#animals.push(new Mamal(item.name, item.canFly));
        break;
      case "reptile":
        this.#animals.push(new Reptile(item.name, item.canFly));
        break;

      default:
        break;
    }
    this.#animals.push(animal);
  }
  showAnimals() {
    this.#animals.forEach((animal) => {
      console.log(animal.introduce());
    });
  }
}
