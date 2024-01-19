import Veihcle from "./Veihcle.js";

export default class Car extends Veihcle {
  constructor(data) {
    super();
    this.speed = data[1];
    console.log("Car speed", this.speed);
  }
}
