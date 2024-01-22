export default class Veihcle {
  speed = 10;
  brand = "";
  image;

  constructor(element) {
    this.speed = element.speed;
    this.brand = element.brand;
    this.image = element.image;
    this.build();
  }

  build() {
    const img = document.createElement("img");
    img.src = this.image;
    document.body.appendChild(img);
  }
}
