import Gallery from "./Gallery.js";

let data;

window.onload = async () => {
  data = await getJson();

  const gallery = new Gallery(() => console.log(data));

  data.forEach((item) => {
    gallery.addArt(item);
  });

  gallery.showSlide();
};

const getJson = async () => {
  const request = await fetch("data.json");
  const result = await request.json();
  return result;
};
