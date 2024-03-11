import Portfolio from "./Portfolio.js";

/**
 * Represents a gallery of images.
 */
export default class Gallery {
  #callback;
  #currentSlide = null;
  view;
  images = [];

  /**
   * Creates a new Gallery instance.
   * @param {Function} callback - The callback function to be called when a slide is shown.
   */
  constructor(callback) {
    this.#callback = callback;
    this.view = document.querySelector("#image-container");
  }

  /**
   * Shows the slides in the gallery.
   */
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

    /**
     * Shows the slide at the specified index.
     * @param {number} index - The index of the slide to show.
     */
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

    /**
     * Shows the info.
     */
    const showInfo = () => {
      console.log("showInfo");
    };
  }

  /**
   * Adds an image to the gallery.
   * @param {Image} Image - The image to add.
   */
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

  /**
   * Performs the art.
   * @param {Image} images - The image to perform.
   */
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
