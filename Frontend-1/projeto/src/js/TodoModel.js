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

  //TASKS
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

  //ITEMS
  addItem(taskIndex, item) {
    this.#tasks[taskIndex].items.push(item);
    this.#updateLocalStorage();
  }

  deleteItem(taskIndex, itemIndex) {
    this.#tasks[taskIndex].items.splice(itemIndex, 1);
    this.#updateLocalStorage();
  }

  updateItem(taskIndex, itemIndex, value) {
    this.#tasks[taskIndex].items[itemIndex].checked = value;
    this.#updateLocalStorage();
  }

  getItems(taskIndex) {
    return this.#tasks[taskIndex].items;
  }

  #updateLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.#tasks));
  }
}
