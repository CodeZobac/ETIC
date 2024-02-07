export default class ArtPiece {
  #image;
  #callback;
  #data;
  constructor(data, callback) {
    this.#data = data;

    this.#callback = callback;

    this.#image = document.createElement("img");
    this.#image.src = this.#data.image;
    this.#image.onclick = () => this.#callback;

    const container = document.querySelector("#images-container");
    container.appendChild(this.#image);
  }

  // createImage(type) {
  //   const div = document.createElement("div");
  //   div.className = type;
  //   const img = document.createElement("img");
  //   img.src = this.#image;
  //   div.appendChild(img);
  //   document.querySelector("body").appendChild(div);
  // }

  artInfo() {
    return (
      this.#data.type +
      "created by" +
      this.#data.artist +
      "with the title" +
      this.#data.title
    );
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
