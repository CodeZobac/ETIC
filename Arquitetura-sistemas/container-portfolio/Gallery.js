import Portfolio from "./Portfolio.js";

export default class Gallery {
  #callback;
  #currentSlide = null;
  view;
  images = [];
  constructor(callback) {
    this.#callback = callback;
    this.view = document.querySelector("#image-container");
  }

  showSlide() {
    const arr = this.images;

    const container = document.querySelector("#image-container");
    container.innerHTML = "";
    let currentIndex = 0;

    const slides = arr.map((images) => {
      const slide = document.createElement("div");
      slide.className = "item";
      slide.appendChild(images.view);
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
      this.#callback(arr[currentIndex]);
    };

    const left = document.querySelector("#left");
    left.onclick = () => {
      showSlide(currentIndex - 1);
    };
    const right = document.querySelector("#right");
    right.onclick = () => {
      showSlide(currentIndex + 1);
    };

    const info = document.querySelector("#info");
    info.onclick = () => {
      showInfo();
    };

    const showInfo = () => {
      console.log("showInfo");
    };
  }

  addArt(Image) {
    let nextArt = null;
    nextArt = new Portfolio(Image, () => {
      this.#performArt(nextArt);
      console.log("clicked");
    });
    if (nextArt !== null) {
      this.view.appendChild(nextArt.view);
      this.images.push(nextArt);
    }
  }

  #performArt(images) {
    if (this.#currentSlide) {
      this.#currentSlide.active = false;
    }

    this.#currentSlide = this.images.find(
      (slide) => slide.name === images.name
    );
    this.#currentSlide.active = true;
    this.#callback(images);
  }
}
