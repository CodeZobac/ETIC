import Veihcle from "./Veihcle.js";

export default class Motorcycle extends Veihcle {
  constructor() {
    super();
    this.speed = 50;
    console.log("Motorcycle speed", this.speed);
  }
}
