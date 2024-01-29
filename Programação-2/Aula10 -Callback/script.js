// window.onload = () => {
//   const func = (obj) => {
//     obj.name = "joana";
//   };
//   const obj = {
//     name: "bruno",
//   };
//   console.log(obj);
//   func(obj);
//   console.log(obj);
// };

// window.onload = () => {
//   const h1 = document.querySelector("h1");
//   const test = new Test(() => {
//     h1.innerText += "App test clicked";
//   });

//   test.setSize(100, 200);
//   test.background = "aqua";
// };

class Test {
  #name = "test";
  #age = 10;
  #gender = "male";
  #view;
  #callback;

  constructor(callback) {
    this.#callback = callback;
    this.#view = document.createElement("div");
    this.#view.onclick = () => {
      this.#callback();
    };
    document.body.appendChild(this.#view);
  }

  get background() {
    return this.#view.style.backgroundColor;
  }
  set background(value) {
    this.#view.style.backgroundColor = value;
  }

  setSize(width, height) {
    this.#view.style.width = width + "px";
    this.#view.style.height = height + "px";
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getGender() {
    return this.gender;
  }

  setName(value) {
    this.#name = value;
  }
  setAge(value) {
    this.#age = value;
  }
  setGender(value) {
    this.#gender = value;
  }
}

window.onload = () => {
  test = new NewTest(() => {
    const h1 = document.querySelector("h1");
    h1.innerText += " Red Div Clicked";
  });
};

class NewTest {
  #view;
  #callback;
  constructor(callback) {
    this.#callback = callback;
    this.#view = document.createElement("div");
    this.#view.style.background = "red";
    this.#view.style.height = "100px";
    this.#view.style.width = "100px";
    this.#view.onclick = () => {
      this.#callback();
    };
    document.body.appendChild(this.#view);
  }
}
