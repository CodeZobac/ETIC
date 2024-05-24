export default class TodoModel {
  #data = [
    {
      title: "task 1",
      task: [
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
    localStorage.setItem("todo", JSON.stringify(this.#data));
  }
  addTask(task) {
    this.#data.push(item);
    this.#updateLocalStorage();
  }

  deleteTask(index) {
    this.#data.splice(index, 1);
    this.#updateLocalStorage();
  }

  getTasks() {
    return JSON.parse(localStorage.getItem("todo"));
  }

  #updateLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.#data));
  }
}
