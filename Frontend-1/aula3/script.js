window.onload = () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  let animID = null;
  const button = document.querySelector("button");

  const width = canvas.width;
  const height = canvas.height;

  const colors = [
    "green",
    "yellow",
    "blue",
    "red",
    "black",
    "purple",
    "orange",
    "pink",
    "brown",
    "gray",
  ];
  const blockWidth = width / colors.length;

  for (let i = 0; i < colors.length; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(blockWidth * i, 0, blockWidth, height);
  }

  document.querySelector("button").onclick = () => {
    if (animID) {
      cancelAnimationFrame(animID);
      animID = null;
      button.innerText = "Start";
    } else {
      for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i];
        ctx.fillRect(blockWidth * i, 0, blockWidth, height);
      }
      draw();
      button.innerText = "Stop";
    }
  };
  //   ctx.strokeStyle = "black";
  //   ctx.beginPath();
  //   ctx.moveTo(0, 0);
  //   ctx.lineTo(10, 50);
  //   ctx.bezierCurveTo(50, 50, 50, 100, 100, 100);
  //   ctx.stroke();

  const vector = {
    x: 0,
    y: 0,
  };

  const draw = () => {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(vector.x, vector.y);
    ctx.stroke();
    vector.x += 1;
    vector.y += 1;

    animID = requestAnimationFrame(draw);
    const button = document.querySelector(".clear");
    button.onclick = () => {
      cancelAnimationFrame(animID);
      animID = null;
      ctx.clearRect(0, 0, width, height);
    };
  };
};
