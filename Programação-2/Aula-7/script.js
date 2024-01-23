import Boat from "./Boat.js";
import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

let currentVehicle;

const loadData = async (url) => {
  const request = await fetch(url);
  const result = await request.json();
  return result;
};

const createLiContent = (content) => {
  const btn = document.createElement("button");
  btn.innerText = content.brand;
  btn.style.marginTop = "1vw";

  // btn.addEventListener("click", () => {
  //   console.log("Button clicked");});

  btn.onclick = () => {
    if (currentVehicle) {
      currentVehicle.destroy();
    }
    switch (content.type) {
      case "car":
        currentVehicle = new Car(content);
        break;
      case "motorcycle":
        currentVehicle = new Motorcycle(content);
        break;
      case "boat":
        currentVehicle = new Boat(content);
        break;
    }
  };
  return btn;
};

const createList = (data) => {
  const ul = document.querySelector("ul");
  data.forEach((item) => {
    const li = document.createElement("li");
    // li.innerHTML = "<a href='#'>" + item.brand + "</a>";
    li.appendChild(createLiContent(item));
    ul.appendChild(li);
  });
};

let isPlaying = null;
let playButton;

const animate = () => {
  currentVehicle.animate();
  isPlaying = requestAnimationFrame(animate);
};

const playAnimation = () => {
  isPlaying = requestAnimationFrame(animate);
  playButton.innerText = "Stop";
  playButton.className = "red";
};

const stopAnimation = () => {
  cancelAnimationFrame(isPlaying);
  isPlaying = null;
  playButton.innerText = "Play";
  playButton.className = "green";
};

// let playButton;
// let isPlaying = null;
// const play = () => {
//   isPlaying = setInterval(() => {
//     console.log("Sta cuzzy");
//   }, 100);
//   playButton.innerText = "Stop";
//   playButton.className = "red";
// };
// const stop = () => {
//   clearInterval(isPlaying);
//   isPlaying = null;
//   playButton.innerText = "Play";
//   playButton.className = "green";
// };

window.onload = async () => {
  const data = await loadData("data.json");
  data.sort((a, b) => a.type.localeCompare(b.type));
  const ul = createList(data);
  playButton = document.querySelector("#play_pause");

  playButton.onclick = () => {
    isPlaying ? stopAnimation() : playAnimation();
    console.log("play pause clicked");
  };
};
