export default class TodoModel {
  #tasks = [
    {
      title: "task 1",
      items: [
        {
          item: "item 1",
          checked: false,
        },
        {
          item: "item 2",
          checked: false,
        },
        {
          item: "item 3",
          checked: false,
        },
      ],
    },
  ];

  constructor() {

    if (!localStorage.getItem("todo")) {
      localStorage.setItem("todo", JSON.stringify(this.#tasks));
    }
    
  }
  addTask(task) {
    this.#tasks.push(item);
    this.#updateLocalStorage();
  }

  deleteTask(index) {
    this.#tasks.splice(index, 1);
    this.#updateLocalStorage();
  }

  getTasks() {
    return JSON.parse(localStorage.getItem("todo"));
  }

  #updateLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.#tasks));
  }
}
