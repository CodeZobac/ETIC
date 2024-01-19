export default class Veihcle {
  speed = 10;
  brand = "";

  constructor(element) {
    this.speed = element.speed;
    this.brand = element.brand;
  }
}
