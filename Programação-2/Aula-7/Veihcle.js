export default class Veihcle {
  speed = 10;
  brand = "";
  image;
  #img;
  #yPos = 0;

  constructor(element) {
    this.speed = element.speed;
    this.brand = element.brand;
    this.image = element.image;
    this.build();
  }

  animate() {
    this.#yPos += 1;
    console.log(this.#yPos);
    this.#img.style.transform = `translateY(${this.#yPos}px)`;
    // this.#img.style.transform = "translateY()";
  }

  build() {
    this.#img = document.createElement("img");
    this.#img.src = this.image;
    document.body.appendChild(this.#img);
  }

  destroy() {
    document.body.removeChild(this.#img);
  }
}
