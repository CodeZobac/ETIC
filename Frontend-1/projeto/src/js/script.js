import TodoModel from "./TodoModel.js";

window.onload = async () => {
  // O teu código aqui...

  const model = new TodoModel();
  console.log(model.getTasks());

  const listsContainer = document.querySelector("#lists-container");
  const todoHeader = document.querySelector("todo-header");
  const taskItem = document.querySelector("task-item");

  document.querySelector("todo-header").addEventListener("clicked", () => {
    listsContainer.style.transform = "translateX(0)";
    todoHeader.state = "tasks";
  });

  taskItem.addEventListener("clicked", () => {
    listsContainer.style.transform = "translateX(-100%)";
    todoHeader.state = "items";
    todoHeader.Taskname = "Testing";
  });

  taskItem.addEventListener("delete", () => {
    console.log("delete");
  });
};
