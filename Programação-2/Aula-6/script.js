import Boat from "./Boat.js";
import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

// const data = {
//   Car: [
//     {
//       brand: "Porsche",
//       speed: 280,
//     },
//     {
//       brand: "Fiat",
//       speed: 170,
//     },
//   ],
//   Motorcycle: [
//     {
//       brand: "Kawasaki",
//       speed: 260,
//     },
//     {
//       brand: "Ducati",
//       speed: 270,
//     },
//   ],
// };

// const vehicles = [];

// window.onload = () => {
//   console.log("window loaded");
//   const nav = document.querySelector("nav");

//   const creatUL = (name, data) => {
//     const ul = document.createElement("ul");
//     const title = document.createElement("li");
//     title.innerText = name;
//     ul.appendChild(title);
//     data.forEach((element) => {
//       const li = document.createElement("li");
//       const button = document.createElement("button");
//       button.onclick = (event) => {
//         switch (name) {
//           case "Car":
//             vehicles.push(new Car(element));
//             break;
//           case "Motorcycle":
//             vehicles.push(new Motorcycle(element));
//             break;

//           default:
//             break;
//         }
//         console.log(vehicles);
//       };
//       button.innerText = element.brand;
//       li.appendChild(button);
//       ul.appendChild(li);
//     });
//     nav.appendChild(ul);
//   };

//   for (const key in data) {
//     creatUL(key, data[key]);
//   }
// };

const loadData = async (url) => {
  const request = await fetch(url);
  const result = await request.json();
  return result;
};

const createLiContent = (content) => {
  const btn = document.createElement("button");
  btn.innerText = content.brand;
  btn.style.marginTop = "1vw";
  btn.onclick = () => {
    switch (content.type) {
      case "car":
        new Car(content);
        break;
      case "motorcycle":
        new Motorcycle(content);
        break;
      case "boat":
        new Boat(content);
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

window.onload = async () => {
  const data = await loadData("data.json");
  data.sort((a, b) => a.type.localeCompare(b.type));
  const ul = createList(data);
  // console.log(data);
};
