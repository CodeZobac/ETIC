/**
 * Represents a portfolio item.
 * @class
 */
export default class Portfolio {
  view;
  #data;
  #callback;
  #image;

  /**
   * Creates an instance of Portfolio.
   * @param {Object} data - The data for the portfolio item.
   * @param {Function} callback - The callback function to be called when the image is clicked.
   */
  constructor(data, callback) {
    this.#data = data;
    this.#callback = callback;
    this.view = document.createElement("div");
    this.view.className = "item";
    this.#image = document.createElement("img");
    this.#image.src = this.#data.image;
    this.#image.onclick = () => this.#callback();
    this.view.appendChild(this.#image);
  }
}
