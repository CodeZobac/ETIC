window.onload = async () => {
  const test2 = new AppTest2();
  test2.subscribe("test_data_loaded", (data) => {
    console.log("sub1", data);
  });
};

// class AppTest extends HTMLElement {
//   constructor() {
//     super();
//   }
//   async loadData() {
//     const req = await fetch("data.json");
//     const res = await req.json();
//     this.dispatchEvent(new CustomEvent("test_data_loaded", { detail: res }));
//   }
// }

// customElements.define("app-tste", AppTest);

class AppTest2 {
  //lista de eventos
  events = [];
  constructor() {}
  subscribe(event, handler) {
    //se nesta lista de eventos não existir o evento "test_data_loaded"
    if (!this.events[event]) {
      this.events[event] = [];
      // criar o tipo "test_data_loaded"
    }
    // e adicionar á lista
    this.events[event].push(handler);
  }
  unsubscribe(event, handler) {
    if (this.events[event]) {
      const index = this.events[event].findIndex((item) => item === handler);
      this.events[event].splice(index, 1);
    }
  }
  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((handler) => handler(data));
    }
  }
}
