window.onload = () => {
  const webGallery = document.querySelector("web-gallery");
  webGallery.addEventListener("ready", (ev) => {
    console.log("ready", ev.detail.numberOfimages);
  });
  webGallery.dataURL = "assets/gallery_data.json";
};
