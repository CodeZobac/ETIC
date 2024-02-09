import Gallery from "./Gallery.js";

window.onload = async () => {
  const data = await getJson();

  const gallery = new Gallery((art) => {
    console.log(art);
  });
  data.forEach((item) => {
    gallery.addArt(item);
  });
  document.querySelector("#photos-button").onclick = () => {
    gallery.showSlide("photo");
    const h2 = document.querySelector("h2");
    h2.innerText = "Photos Gallery";
  };
  document.querySelector("#sculptures-button").onclick = () => {
    gallery.showSlide("sculpture");
    const h2 = document.querySelector("h2");
    h2.innerText = "Sculptures Gallery";
  };
  document.querySelector("#paintings-button").onclick = async () => {
    await gallery.showSlide("painting");
    const h2 = document.querySelector("h2");
    h2.innerText = "Paintings Gallery";
  };
};

const getJson = async () => {
  const request = await fetch("data.json");
  const result = await request.json();
  return result;
};
