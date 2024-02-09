import ArtPiece from "./ArtPiece.js";

export default class Photo extends ArtPiece {
  #year;
  constructor(data, callback) {
    super(data, callback);
    this.#year = data.year;
  }
}
