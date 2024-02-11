import Gallery from "./Gallery.js";
let data;

window.onload = async () => {
  data = await getJson();

  const info = document.querySelector("#info");
  info.style.display = "none";

  const left = document.querySelector("#left");
  left.style.display = "none";

  const right = document.querySelector("#right");
  right.style.display = "none";

  const gallery = new Gallery((art) => {
    console.log(art);
  });

  data.forEach((item) => {
    gallery.addArt(item);
  });

  document.querySelector("#photos-button").onclick = () => {
    document.querySelector("#initial-text").style.display = "none";
    document.querySelector(".info-container").innerHTML = "";
    left.style.display = "inline-flex";
    right.style.display = "inline-flex";
    info.style.display = "block";

    gallery.showSlide("photo");

    const h2 = document.querySelector("h2");
    h2.innerText = "Photos Gallery";
  };

  document.querySelector("#sculptures-button").onclick = () => {
    document.querySelector("#initial-text").style.display = "none";
    document.querySelector(".info-container").innerHTML = "";
    left.style.display = "inline-flex";
    right.style.display = "inline-flex";
    info.style.display = "block";

    gallery.showSlide("sculpture");

    const h2 = document.querySelector("h2");
    h2.innerText = "Sculptures Gallery";
  };

  document.querySelector("#paintings-button").onclick = () => {
    document.querySelector("#initial-text").style.display = "none";
    document.querySelector(".info-container").innerHTML = "";
    left.style.display = "inline-flex";
    right.style.display = "inline-flex";
    info.style.display = "block";

    gallery.showSlide("painting");

    const h2 = document.querySelector("h2");
    h2.innerText = "Paintings Gallery";
  };

  const view = document.querySelector("#gallery-view");
  view.innerHTML = "";
};

const getJson = async () => {
  const request = await fetch("data.json");
  const result = await request.json();
  return result;
};
