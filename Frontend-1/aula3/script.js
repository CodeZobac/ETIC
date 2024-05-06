window.onload = () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const width = canvas.width;
  const height = canvas.height;

  const blockWidth = width / 4;

  const colors = ["green", "yellow", "blue", "red"
  ]

  for (let i = 0; i < colors.length; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(blockWidth * i, 0, blockWidth, height);
    
  }
}
