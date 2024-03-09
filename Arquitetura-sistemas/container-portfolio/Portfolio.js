export default class Portfolio {
  view;
  #data;
  #callback;
  #image;
  constructor(data, callback) {
    this.#data = data;
    this.#callback = callback;
    this.view = document.createElement("div");
    this.view.className = "item";
    this.#image = document.createElement("img");
    this.#image.src = this.#data.image;
    this.#image.onclick = () => this.#callback();
    this.view.appendChild(this.#image);
  }
}
