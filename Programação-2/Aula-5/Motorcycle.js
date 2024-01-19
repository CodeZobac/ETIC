import Veihcle from "./Veihcle.js";

export default class Motorcycle extends Veihcle {
  constructor(data) {
    super(data);
    console.log("Motorcycle speed", this.speed);
  }
}
