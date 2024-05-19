const template = document.createElement("template");
template.innerHTML = `
    <style>

        /*ELEMENTS*/
        * {
            font-family: system-ui, sans-serif;
        }
        button {
            border: none;
            background-color: green;
            padding: 10px 20px;
            cursor: pointer;
        }

        /*CLASSES*/
        .gallery {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 500px;
            height: 500px;
            gap: 10px;
        }

        /*IDS*/
        #images-container {
            position: relative;
            display: flex;
            flex: 1;
            background-color: red;
        }
        #controls {
            display: flex;
            justify-content: space-between;
            background-color: blue;
        }
        #play-pause {
            position: absolute;
            top: 10px;
            left: 10px;
        }
    </style>
    <div class="gallery">

        <div id="images-container"></div>

        <div id="controls">
            <button id="previous">Previous</button>
            <button id="next">Next</button>
        </div>

        <button id="play-pause">STOP</button>
        
    </div>
`;
const itemTemplate = document.createElement("template");
itemTemplate.innerHTML = `
        <style>
            .item {
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: url('https://imgs.search.brave.com/uvnrdXo28Rk_o7wZYO-EKCKJLxknex-iE2IL8jOhVdY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/MTM0MDQ3L3Bob3Rv/L3N1cmZlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NHFL/bzlYeFgwbDZzTWFM/N2NNa2pJYmlFcmFP/bTJzQUJ3cWdQZXIy/ZDV6TT0');
                background-position: center;
                background-size: cover;

            }
        </style>
        <div class="item"></div>
`;
class WebGallery extends HTMLElement {
  static observedAtributes = ["gallery_data.json"];
  #galleryData = null;
  shadowRoot = null;
  #imagesContainer = null;
  #intervalID = null;
  #currentItem = 0;
  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: "closed" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const imageContainer = this.shadowRoot.querySelector("#images-container");
    const item = itemTemplate.content.cloneNode(true);
    imageContainer.appendChild(item);

    this.shadowRoot.querySelector("#previous").onclick = () => {
      console.log("previous clicked");
    };

    this.shadowRoot.querySelector("#next").onclick = () => {
      console.log("next clicked");
    };

    this.shadowRoot.querySelector("#play-pause").onclick = () => {
      console.log("play pause clicked");
    };
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "data-url":
        this.#loadData();
        this.#render();
        break;

      default:
        break;
    }
  }
  async #loadData() {
    const req = await fetch(this.getAttribute("data-url"));
    this.#galleryData = req.json();
    console.log(res);
  }

  #render() {
    this.#galleryData.forEach((item, index) => {
      const clone = itemTemplate.content.cloneNode(true);
      this.#imagesContainer.appendChild(clone);
      const element = this.#imagesContainer.children[index];
      clone.style.backgroundImage = `url(${item.url})`;
      console.log(clone);
    });
  }

  playPause() {
    if (this.#intervalID !== null) {
      clearInterval(this.#intervalID);
      this.#intervalID = null;
      this.shadowRoot.querySelector("#play-pause").textContent = "PLAY";
    } else {
      setInterval(() => {
        this.#currentItem++;
        if (this.#currentItem >= this.#imagesContainer.children.length) {
          this.#currentItem = 0;
        }
        this.shadowRoot.querySelector("#next").click();
      }, 2000);
    }
  }

  // Getters and Setters

  get dataUrl() {
    return this.getAttribute("data-url");
  }

  set dataUrl(value) {
    this.setAttribute("data-url", value);
  }
}
customElements.define("web-gallery", WebGallery);
