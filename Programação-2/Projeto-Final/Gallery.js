import Painting from "./Painting.js";
import Photo from "./Photo.js";
import Sculpture from "./Sculpture.js";

export default class Gallery {
  #callback;
  #currentArt = null;
  view;
  artPieces = [];
  constructor(callback) {
    this.#callback = callback;
    this.view = document.querySelector("#gallery-view");
    console;
  }

  showSlide(type) {
    const arr = this.artPieces.filter((item) => item.type === type);
    console.log(arr);

    const container = document.querySelector("#gallery-view");
    container.innerHTML = "";
    let currentIndex = 0;

    const slides = arr.map((artPiece) => {
      const slide = document.createElement("div");
      slide.className = "item";
      slide.appendChild(artPiece.view);
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

    const showInfo = () => {
      const currentSlide = arr[currentIndex];
      const infoContainer = document.querySelector(".info-container");
      infoContainer.innerHTML = "";
      const text = document.createElement("p");
      text.className = "info";
      text.innerText = currentSlide.artInfo();
      infoContainer.appendChild(text);

      // console.log(currentSlide.artInfo());
    };

    const left = document.querySelector("#left");
    left.onclick = () => {
      document.querySelector(".info-container").innerHTML = "";
      showSlide(currentIndex - 1);
    };
    const right = document.querySelector("#right");
    right.onclick = () => {
      document.querySelector(".info-container").innerHTML = "";
      showSlide(currentIndex + 1);
    };

    const info = document.querySelector("#info");
    info.onclick = (event) => {
      showInfo();
      if (event.target.classList.contains("info")) {
        info.onclick = () => {
          document.querySelector(".info-container").innerText = "";
        };
      }
    };
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

    this.#currentArt = this.artPieces.find((art) => art.name === artPiece.name);
    this.#currentArt.active = true;
    this.#callback(artPiece);
  }

  // createButton() {
  //   const container = document.querySelector("#gallery-view");
  //   const left = document.createElement("button");
  //   const right = document.createElement("button");
  //   left.id = "left";
  //   right.id = "right";
  //   left.innerText = "Previous";
  //   right.innerText = "Next";
  //   right.appendChild(container);
  //   right.appendChild(container);
  // }
}
