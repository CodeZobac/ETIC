export default class ArtPiece {
  #image;
  constructor(data) {
    this.#image = data.image;
  }

  createImage(type) {
    const div = document.createElement("div");
    div.className = type;
    const img = document.createElement("img");
    img.src = this.#image;
    div.appendChild(img);
    document.querySelector("body").appendChild(div);
  }
}
