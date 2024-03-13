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

  const about = () => {
    const a = document.querySelector(".about");
    const hr = document.createElement("hr");
    hr.style.height = "5px";
    hr.style.backgroundColor = "#01372b";
    hr.style.borderRadius = "20px";
    a.appendChild(hr);
  };

  const projects = () => {
    const p = document.querySelector(".projects");
    const hr = document.createElement("hr");
    hr.style.height = "5px";
    hr.style.backgroundColor = "#01372b";
    hr.style.borderRadius = "20px";
    p.appendChild(hr);
  };

  const contact = () => {
    const c = document.querySelector(".contact");
    const hr = document.createElement("hr");
    hr.style.height = "5px";
    hr.style.backgroundColor = "#01372b";
    hr.style.borderRadius = "20px";
    c.appendChild(hr);
  };

  document.querySelector(".about").onmouseover = () => {
    about();
  };

  document.querySelector(".about").onmouseout = () => {
    const hr = document.querySelector(".about hr");
    if (hr) hr.remove();
  };

  document.querySelector(".projects").onmouseover = () => {
    projects();
  };

  document.querySelector(".projects").onmouseout = () => {
    const hr = document.querySelector(".projects hr");
    if (hr) hr.remove();
  };

  document.querySelector(".contact").onmouseover = () => {
    contact();
  };

  document.querySelector(".contact").onmouseout = () => {
    const hr = document.querySelector(".contact hr");
    if (hr) hr.remove();
  };
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
