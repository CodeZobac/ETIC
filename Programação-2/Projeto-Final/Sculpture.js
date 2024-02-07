import ArtPiece from "./ArtPiece.js";

export default class Sculpture extends ArtPiece {
  #material;
  constructor(data, callback) {
    super(data, callback);
  }
}
