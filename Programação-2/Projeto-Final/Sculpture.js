import ArtPiece from "./ArtPiece.js";

export default class Sculpture extends ArtPiece {
  #dimension;
  #material;
  constructor(data, callback) {
    super(data, callback);
    this.#dimension = data.dimension;
    this.#material = data.material;
  }

  artInfo() {
    let parentInfo = super.artInfo();
    return (
      parentInfo +
      " it was made in " +
      this.#material +
      " and measures " +
      this.#dimension
    );
  }
}
