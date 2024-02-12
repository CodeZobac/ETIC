import ArtPiece from "./ArtPiece.js";

export default class Painting extends ArtPiece {
  #style;
  constructor(data, callback) {
    super(data, callback);
    this.#style = data.style;
  }

  artInfo() {
    let parentInfo = super.artInfo();

    return parentInfo + " it has a " + this.#style + " style";
  }
}
