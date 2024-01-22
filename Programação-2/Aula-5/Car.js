import Veihcle from "./Veihcle.js";

export default class Car extends Veihcle {
  constructor(element) {
    super(element);
    this.speed = element.speed;
    this.brand = element.brand;
    console.log("Brand:", this.brand, "Speed:", this.speed);
  }
}



