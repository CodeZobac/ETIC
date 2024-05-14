class WordCounter extends HTMLElement {
  constructor() {
    super();
  }

  createElement(elementType, content) {
    const element = document.createElement(elementType);
    element.innerHTML = content;
    this.appendChild(element);
    return element;
  }

  createAudioElement(src) {
    const audio = document.createElement("audio");
    audio.src = src;
    audio.controls = true;
    this.appendChild(audio);
    return audio;
  }

  get numWords() {
    return this.querySelector("p").innerText.split(/\s+/g).length;
  }
}
customElements.define("word-counter", WordCounter);

window.onload = () => {
  const wordCounter = document.querySelector("word-counter");
  wordCounter.createElement("p", "Hello, World!");
  console.log(wordCounter.numWords);
  wordCounter.createAudioElement("https://www.w3schools.com/tags/horse.mp3");
};
