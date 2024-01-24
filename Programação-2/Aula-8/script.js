// window.onload = () => {
//   const button = document.querySelector("button");
//   button.onclick = () => {
//     console.log("button clicked");
//   };
//   button.onmousedown = () => {
//     console.log("mouse down");
//   };
//   button.onmouseup = () => {
//     console.log("mouse up");
//   };
//   button.onmouseover = () => {
//     console.log("mouse hover");
//   };
//   button.onmouseenter = () => {
//     console.log("Mouse enter");
//   };
//   button.onmouseout = () => {
//     console.log("Mouse out");
//   };
// };

// const createh1 = () => {
//   const nav = document.querySelector("nav");
//   const h1 = document.createElement("h1");
//   h1.innerText = "Title";
//   nav.appendChild(h1);
// };

// window.onload = () => {
//   const large = document.querySelector(".large");
//   let intervalID = null;
//   large.onclick = () => {
//     if (intervalID === null) {
//       intervalID = setInterval(() => {
//         console.log("interval");
//       }, 100);
//     } else {
//       console.log("stop interval");
//       clearInterval(intervalID);
//       intervalID = null;
//     }
//   };
// };
window.onload = () => {
  const large = document.querySelector(".large");
  large.onclick = () => {
    large.dispatchEvent(new CustomEvent("div_click"));
  };
  large.addEventListener("div_click", () => {
    console.log("div clicked");
  });
};
