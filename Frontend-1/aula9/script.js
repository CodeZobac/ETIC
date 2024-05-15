const template = document.createElement("template");
template.innerHTML = `
    <style>
        /*ELEMENTS*/
        * {
            font-family: system-ui, sans-serif;
        }

        button {
            border: none;
            color: white;
            cursor: pointer;
            background-color: transparent;
            padding: 10px 20px;
        }

        /*CLASSES*/
        .gallery {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 500px;
            height: 500px;
        }
        
        /*IDS*/
        #images-container {
            display: flex;
            flex: 1;
            background-color: red;
        }

        #controls {
            display: flex;
            justify-content: space-between;
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
            <button id="prev">Anterior</button>
            <button id="next">Próxima</button>
        </div>
        <button id="play-pause">STOP</button>
    </div>
    `;

class WebGallery extends HTMLElement {
  shadowRoot = null;
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  addTemplate(template) {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  conectedCallback() {
    console.log("Conected");
  }
}
customElements.define("web-gallery", WebGallery);

window.onload = () => {};
