import ArtPiece from "./ArtPiece.js";

export default class Photo extends ArtPiece {
  #description;
  constructor(data, callback) {
    super(data, callback);
    this.#description = data.description;
  }
  artInfo(data) {
    let parentInfo = super.artInfo();
    return parentInfo + "with the description" + this.#description;
  }
}
