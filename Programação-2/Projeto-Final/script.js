import ArtPiece from "./ArtPiece.js";

window.onload = async () => {
  const data = await getJson();
  let addImage = new ArtPiece(data[0]);
  let image = addImage.createImage(data[0].type);
  image.onclick = () => {
    console.log("clicked");
  };
};

const getJson = async () => {
  const request = await fetch("data.json");
  const result = await request.json();
  return result;
};
