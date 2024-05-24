import TodoModel from "./TodoModel.js";

window.onload = async () => {
  const model = new TodoModel();
  console.log(model.getTasks());

  const listsContainer = document.querySelector("#lists-container");
  const todoHeader = document.querySelector("todo-header");

  document.querySelector("todo-header").addEventListener("clicked", () => {
    listsContainer.style.transform = "translateX(0)";
    todoHeader.state = "tasks";
  });

  const buildTasksList = (tasks) => {
    const tasksList = document.querySelector("#tasks");
    tasksList.innerHTML = "";
    
    tasks.forEach((task) => {
      const li = document.createElement("li");
      const taskItem = new TaskItem();

      taskItem.addEventListener("clicked", () => {
        listsContainer.style.transform = "translateX(-100%)";
        todoHeader.state = "items";
        todoHeader.Taskname = task.title;
      });

      taskItem.addEventListener("delete", () => {
        console.log("delete");
      });
      taskItem.title = task.title;

      li.appendChild(taskItem);
      tasksList.appendChild(li);
    });
  };

  const buildItemsList = () => {};

  buildTasksList(model.getTasks());
};
