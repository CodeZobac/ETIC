import Gallery from "./Gallery.js";
// Path: Gallery.js

// /**
//  * Represents a carroussel.
//  * @class
//  */
let data;

window.onload = async () => {
  data = await getJson();

  const gallery = new Gallery(() => console.log(data));

  data.forEach((item) => {
    gallery.addArt(item);
  });

  gallery.showSlide();

  document.querySelector(".about").onmouseover = about();
};

/**
 * Fetches and returns JSON data from "data.json".
 * @returns {Promise<Object>} A promise that resolves to the JSON data.
 */
const getJson = async () => {
  const request = await fetch("data.json");
  const result = await request.json();
  return result;
};

const about = () => {
  const a = document.querySelector(".about");
  const hr = document.createElement("hr");
  a.appendChild(hr);
  a.className = "hover";
};
