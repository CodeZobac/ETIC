import TodoModel from "./TodoModel.js";

window.onload = async () => {
  const model = new TodoModel();
  let currentTaskIndex;

  const listsContainer = document.querySelector("#lists-container");
  const todoHeader = document.querySelector("todo-header");

  document.querySelector("todo-header").addEventListener("clicked", () => {
    listsContainer.style.transform = "translateX(0)";
    todoHeader.state = "tasks";
  });

  const buildTasksList = (tasks) => {
    const tasksList = document.querySelector("#tasks");
    tasksList.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      const taskItem = new TaskItem();

      taskItem.addEventListener("clicked", () => {
        listsContainer.style.transform = "translateX(-100%)";
        todoHeader.state = "items";
        todoHeader.Taskname = task.title;
        buildItemsList(task.items);
        currentTaskIndex = index;
      });

      taskItem.addEventListener("delete", (index) => {
        model.deleteTask(index);
        buildTasksList(model.getTasks());
      });
      taskItem.title = task.title;

      li.appendChild(taskItem);
      tasksList.appendChild(li);
    });
  };

  const buildItemsList = (items) => {
    const checkItemsList = document.querySelector("#items");
    checkItemsList.innerHTML = "";
    items.forEach((item, index) => {
      const li = document.createElement("li");
      const checkItem = new CheckItem();
      checkItem.addEventListener("checked", (ev) => {
        console.log(ev.detail.checked);
      });
      checkItem.addEventListener("delete", () => {
        model.deleteItem(currentTaskIndex, index);
        buildItemsList(model.getItems(currentTaskIndex));
      });
      checkItem.title = item.item;
      checkItem.checked = item.checked;

      li.appendChild(checkItem);
      checkItemsList.appendChild(li);
    });
  };

  buildTasksList(model.getTasks());
};
