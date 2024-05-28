export default class TodoModel {
  #tasks = [];

  constructor() {
    if (!this.getTasks()) {
      localStorage.setItem("todos", JSON.stringify(this.#tasks));
    }
  }

  /**
   * Adds a task to the task list.
   * @param {string} task - The task to be added.
   */
  addTask(task) {
    this.#tasks.push(task);
    this.#updateLocalStorage();
  }

  /**
   * Deletes a task from the task list.
   * @param {number} index - The index of the task to be deleted.
   */
  deleteTask(index) {
    this.#tasks.splice(index, 1);
    this.#updateLocalStorage();
  }

  getTasks() {
    const tasks = JSON.parse(localStorage.getItem("todos"));
    if (tasks) this.#tasks = tasks;
    return this.#tasks;
  }
  /**
   * Adds an item to the specified task.
   *
   * @param {number} taskIndex - The index of the task to add the item to.
   * @param {any} item - The item to add to the task.
   * @returns {void}
   */
  addItem(taskIndex, item) {
    this.#tasks[taskIndex].items.push(item);
    this.#updateLocalStorage();
  }
  /**
   * Updates the value of a specific item in a task.
   *
   * @param {number} taskIndex - The index of the task.
   * @param {number} itemIndex - The index of the item within the task.
   * @param {boolean} value - The new value for the item.
   * @returns {void}
   */
  /**
   * Updates the value of a specific item in a task.
   *
   * @param {number} taskIndex - The index of the task.
   * @param {number} itemIndex - The index of the item within the task.
   * @param {boolean} value - The new value for the item.
   */
  updateItem(taskIndex, itemIndex, value) {
    this.#tasks[taskIndex].items[itemIndex].checked = value + "";
    this.#updateLocalStorage();
  }
  /**
   * Deletes an item from the specified task.
   *
   * @param {number} taskIndex - The index of the task.
   * @param {number} index - The index of the item to delete.
   */
  deleteItem(taskIndex, index) {
    this.#tasks[taskIndex].items.splice(index, 1);
    this.#updateLocalStorage();
  }
  /**
   * Returns the items for a given task.
   *
   * @param {number} taskIndex - The index of the task.
   * @returns {Array} The items for the task.
   */
  getItems(taskIndex) {
    return this.#tasks[taskIndex].items;
  }
  /**
   * Updates the local storage with the current tasks.
   * @private
   */
  #updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.#tasks));
  }
}
