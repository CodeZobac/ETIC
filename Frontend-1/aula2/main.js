import TestA from "./TestA.js"
import TestB from "./TestB.js";

window.onload = () => {
    const a = new TestA();
    const b = new TestB();

    const red = document.querySelector(".a");
    red.onclick = () => {
        console.log("red clicked");
    }

    red.style = `
    background-color: red;
    width: 100px;
    height: 100px;
    `

}