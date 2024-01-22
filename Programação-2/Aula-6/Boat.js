import Veihcle from "./Veihcle.js";

export default class Boat extends Veihcle {
  constructor(element) {
    super(element);
    console.log("Brand:", this.brand, "Speed:", this.speed);
  }
}
