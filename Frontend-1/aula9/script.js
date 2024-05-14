const template = document.createElement("template");
template.innerHTML = `
    <style>
        .gallery{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
            background-color: pink;
        }
        .gallery img{
            width: 100%;
            height: auto;
        }
    </style>
    <div class="gallery><span>This is the gallery</span></div>
    `;

class WebGallery extends HTMLElement {
  shadowRoot = null;
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  addTemplate(template){
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  conectedCallback() {
    console.log("Conected");
  }
}
customElements.define("web-gallery", WebGallery);


window.onload = () => {
    const webGallery = document.querySelector("web-gallery");
    const template = document.createElement("template");
    webGallery.addTemplate(template);   
}