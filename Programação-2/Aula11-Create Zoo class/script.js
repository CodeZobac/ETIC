import Bird from "./Bird.js";
import Mamal from "./Mamal.js";
import Reptile from "./Reptile.js";
import Zoo from "./Zoo.js";

window.onload = async () => {
  const req = await fetch("data.json");
  const res = await req.json();
  console.log(res);
  const zoo = new Zoo();
  res.forEach((item) => {
    zoo.addAnimal(item);
  });

  zoo.showAnimals();
};
