import AudioPlayer from "./AudioPlayer.js";
import Zoo from "./Zoo.js";

window.onload = async () => {
  const req = await fetch("data.json");
  const res = await req.json();
  const audioPlayer = new AudioPlayer();

  const zoo = new Zoo((animal) => {
    console.log("zoo event", animal);
    audioPlayer.play(animal.sound);
  });
  res.forEach((item) => {
    zoo.addAnimal(item);
  });
};
