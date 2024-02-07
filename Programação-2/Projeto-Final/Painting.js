import ArtPiece from "./ArtPiece.js";

export default class Painting extends ArtPiece {
  #age;
  constructor(data, callback) {
    super(data, callback);

    this.#age = data.age;
  }
}
