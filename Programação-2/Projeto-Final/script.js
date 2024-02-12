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
    document.querySelector("#hero-container").innerHTML = "";
    gallery.showSlide("photo");

    const h2 = document.querySelector("h2");
    h2.innerText = "Photos Gallery";
    document.querySelector("gallery-view").onmouseover = () => {
      h2.innerHTML = "";
    };
    document.querySelector("gallery-view").onmouseout = () => {
      h2.innerHTML = "Photos Gallery";
    };
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
    document.querySelector("#gallery-view").onmouseover = () => {
      h2.innerHTML = "";
    };
    document.querySelector("#gallery-view").onmouseout = () => {
      h2.innerHTML = "Sculptures Gallery";
    };
    document.querySelector("#hero-container").innerHTML = "";
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
    document.querySelectorAll("#gallery-view").onmouseover = () => {
      h2.innerHTML = "";
    };
    document.querySelector("#hero-container").innerHTML = "";
  };
  document.querySelectorAll("gallery-view").onmouseout = () => {
    h2.innerHTML = "Paintings Gallery";
  };

  document.querySelector("#gallery-view").innerHTML = "";
};

const getJson = async () => {
  const request = await fetch("data.json");
  const result = await request.json();
  return result;
};
