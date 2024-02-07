import Painting from "./Painting.js";
import Photo from "./Photo.js";
import Sculpture from "./Sculpture.js";

export default class Gallery {
  #callback;
  #photos;
  #paintings;
  #sculptures;
  #currentArt = null;
  constructor(callback) {
    this.#photos = [];
    this.#paintings = [];
    this.#sculptures = [];
    this.#callback = callback;
  }

  addArt(artPiece) {
    let nextArt = null;

    switch (artPiece.type) {
      case "sculpture":
        nextArt = new Sculpture(artPiece, () => this.#performArt(nextArt));

      case "painting":
        nextArt = new Painting(artPiece, () => this.#performArt(nextArt));

      case "photo":
        nextArt = new Photo(artPiece, () => this.#performArt(nextArt));

      default:
        break;
    }
  }

  #performArt(artPiece) {
    if (this.#currentArt) {
      this.#currentArt.active = false;
    }

    switch (artPiece.type) {
      case "sculpture":
        this.#currentArt = this.#sculptures.find(
          (art) => art.name === artPiece.name
        );
        this.#currentArt.active = true;
        this.#callback(artPiece);

      case "painting":
        this.#currentArt = this.#paintings.find(
          (art) => art.name === artPiece.name
        );
        this.#currentArt.active = true;
        this.#callback(artPiece);

      case "photo":
        this.#currentArt = this.#photos.find(
          (art) => art.name === artPiece.name
        );
        this.#currentArt.active = true;
        this.#callback(artPiece);
    }
  }
}
