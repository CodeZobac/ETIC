import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

const data = {
  Car: [
    {
      brand: "Porsche",
      speed: 280,
    },
    {
      brand: "Fiat",
      speed: 170,
    },
  ],
  Motorcycle: [
    {
      brand: "Kawasaki",
      speed: 260,
    },
    {
      brand: "Ducati",
      speed: 270,
    },
  ],
};

const vehicles = [];

window.onload = () => {
  console.log("window loaded");
  const nav = document.querySelector("nav");

  const creatUL = (name, data) => {
    const ul = document.createElement("ul");
    const title = document.createElement("li");
    title.innerText = name;
    ul.appendChild(title);
    data.forEach((element) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.onclick = (event) => {
        switch (name) {
          case "Car":
            vehicles.push(new Car(element));
            break;
          case "Motorcycle":
            vehicles.push(new Motorcycle(element));
            break;

          default:
            break;
        }
        console.log(vehicles);
      };
      button.innerText = element.brand;
      li.appendChild(button);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
  };

  for (const key in data) {
    creatUL(key, data[key]);
  }
};


