export default class ArtPiece {
  #image;
  #callback;
  #data;
  view;
  constructor(data, callback) {
    this.#data = data;
    this.#callback = callback;
    this.view = document.createElement("div");
    this.view.className = "item";
    this.#image = document.createElement("img");
    this.#image.src = this.#data.image;
    this.#image.onclick = () => this.#callback;

    this.view.appendChild(this.#image);
  }

  artInfo() {
    return (
      "This is a " +
      this.#data.type +
      " created by " +
      this.#data.artist +
      " in the year " +
      this.#data.year +
      " with the title " +
      this.#data.title
    );
  }

  get data() {
    return this.#data;
  }

  get type() {
    return this.#data.type;
  }

  get artist() {
    return this.#data.artist;
  }

  set artist(value) {
    this.#data.artist = value;
  }

  get title() {
    return this.#data.title;
  }
}
