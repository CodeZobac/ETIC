export default class Animal {
  #name;
  #callback;
  constructor({ name, image }, callback) {
    this.#name = name;
    this.#callback = callback;

    const img = document.createElement("img");
    img.src = image;
    img.onclick = () => this.#callback();
    const container = document.querySelector("#image-container");
    container.appendChild(img);
  }
  introduce() {
    return "Hello, I'm a " + this.#name;
  }

  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
}
