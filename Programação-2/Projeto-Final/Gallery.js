import Painting from "./Painting.js";
import Photo from "./Photo.js";
import Sculpture from "./Sculpture.js";
import ArtPiece from "./ArtPiece.js";

export default class Gallery {
  #callback;
  #photos;
  #paintings;
  #sculptures;
  #currentArt = null;
  view;
  artPieces = [];
  constructor(callback) {
    this.#photos = [];
    this.#paintings = [];
    this.#sculptures = [];
    this.#callback = callback;
    this.view = document.querySelector("#gallery-view");
    console;
  }

  filterArt(type) {
    const arr = this.artPieces.filter((item) => item.type === type);
    console.log(arr);
    this.view.innerHTML = "";
    arr.forEach((item) => {
      this.view.appendChild(item.view);
    });
  }

  addArt(artPiece) {
    let nextArt = null;
    switch (artPiece.type) {
      case "sculpture":
        nextArt = new Sculpture(artPiece, () => this.#performArt(nextArt));
        break;
      case "painting":
        nextArt = new Painting(artPiece, () => this.#performArt(nextArt));
        break;
      case "photo":
        nextArt = new Photo(artPiece, () => this.#performArt(nextArt));
        break;
      default:
        break;
    }
    if (nextArt !== null) {
      this.view.appendChild(nextArt.view);
      this.artPieces.push(nextArt);
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

  showSlide(type) {
    const arr = this.artPieces.filter((item) => item.type === type);
    console.log(arr);

    const container = document.querySelector("#gallery-view");
    container.innerHTML = ""; // Clear existing slides
    let currentIndex = 0;

    const slides = arr.map((artPiece) => {
      const slide = document.createElement("div");
      slide.className = "item";
      slide.appendChild(artPiece.view); // Assuming artPiece.view is correct
      slide.style.display = "none";
      container.appendChild(slide);
      return slide;
    });

    if (slides.length > 0) {
      slides[currentIndex].style.display = "block";
    }

    const showSlide = (index) => {
      slides[currentIndex].style.display = "none";
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].style.display = "block";
    };

    const left = document.querySelector("#left");
    left.onclick = () => {
      showSlide(currentIndex - 1);
    };
    const right = document.querySelector("#right");
    right.onclick = () => {
      showSlide(currentIndex + 1);
    };
  }
}
