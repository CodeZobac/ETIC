import Veihcle from "./Veihcle.js";

export default class Car extends Veihcle {
  constructor() {
    super();
    this.speed = 20;
    console.log("Car speed", this.speed);
  }
}
