//TODO HEADER

/**
 * Represents the template for the header component.
 * @type {HTMLTemplateElement}
 */
const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
    @import url("./css/system.css");
    *{
        margin: 0;
        padding: 0;
    }

    :host{
        background-color: var(--color-primary);
    }

    header{
        display: flex;
        align-items: center; 
        padding: var(--v-padding) var(--h-padding);
        gap: var(--gap);
    }

    h1{
        color: var(--color-text-light);
        font-size: clamp(32px, 4vw, 48px);
    
    }

    p{
        font-size: clamp(16px, 2vw, 24px);
        color: var(--color-text-dark);
        font-style: italic;
        text-transform: capitalize;
        display: none;
    }

    .icon{
        width: 48px;
        height: 48px;
        margin-left: auto;
        cursor: pointer;
        display: none;
    }

</style>

<header>
    <h1>TODOs</h1>
    <p>Task name</p>
    <div class="icon"> 
        <svg width="100%" height="100%" version="1.1" viewBox="0 0 24.342 24.342" fill="var(--color-text-light)">
            <path d="m9.5578 24.342h-9.5578v-14.193l12.171-10.149 12.171 10.149v14.193h-9.5578v-7.5914h-5.226z"/>
        </svg>
    </div>
</header>
`;

/**
 * Represents a custom HTML element for a todo header.
 * @extends HTMLElement
 */
class TodoHeader extends HTMLElement {
  static observedAttributes = ["state", "task-name"];
  shadowRoot;
  #taskName;
  #icon;
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "closed" });
    this.shadowRoot.append(headerTemplate.content.cloneNode(true));
    this.#taskName = this.shadowRoot.querySelector("p");
    this.#icon = this.shadowRoot.querySelector(".icon");

    this.#icon.onclick = () => this.dispatchEvent(new CustomEvent("clicked"));
  }

  /**
   * Called when an observed attribute has been added, removed, updated, or replaced.
   * @param {string} attrName - The name of the attribute that was changed.
   * @param {any} oldValue - The previous value of the attribute.
   * @param {any} newValue - The new value of the attribute.
   */
  attributeChangedCallback(attrName, oldValue, newValue) {
    switch (attrName) {
      case "state":
        if (newValue === "tasks") {
          this.#taskName.style.display = "none";
          this.#icon.style.display = "none";
        } else {
          this.#taskName.style.display = "initial";
          this.#icon.style.display = "initial";
        }
        break;

      case "task-name":
        this.#taskName.innerText = newValue;
        break;

      default:
        break;
    }
  }

  get state() {
    return this.getAttribute("state");
  }

  set state(value) {
    this.setAttribute("state", value);
  }

  get Taskname() {
    return this.getAttribute("task-name");
  }

  set Taskname(value) {
    this.setAttribute("task-name", value);
  }
}

customElements.define("todo-header", TodoHeader);

//TASK ITEM
/**
 * Represents a template for a task item.
 * @type {HTMLTemplateElement}
 */
const taskItemTemplate = document.createElement("template");
taskItemTemplate.innerHTML = `

<style>
    @import url("./css/system.css");
    *{
        margin: 0;
        padding: 0;
    }
    .button {
      position: relative;
      overflow: hidden;
      width: 100%;
      cursor: pointer;
    }
    
    .button:active .front label,
    .button:active .front .icon {
      transform: scale(0.9);
    }
    
    .front {
      position: absolute;
      display: flex;
      inset: 0;
      gap: 10px;
      justify-content: space-between;
      align-items: center;
      background-color: #dddddd;
      padding: 20px;
      transition: transform 0.3s ease-in-out;
    }
    
    .back {
      display: flex;
      justify-content: flex-end;
      background-color: var(--color-secondary);
      padding: 20px;
    }
    
    label {
      font-size: 36px;
      line-height: 36px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
      color: var(--color-text-dark);
    }
    
    .icon {
      width: 48px;
      height: 48px;
      min-width: 48px;
      min-height: 48px;
    }
    
</style>

<div class="button">
  <div class="front">
    <label for="">Examples</label>
    <div class="icon">
      <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-dark)">
        <path
          d="m12.164 3.25e-7 12.177 12.171-12.177 12.171-3.6954-3.6954 5.8624-5.8624h-14.331v-5.226h14.331l-5.8624-5.8624z"
        />
      </svg>
    </div>
  </div>
  <div class="back">
    <div class="icon">
      <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-light">
        <path
          d="m12.171 8.4754-8.4754-8.4754-3.6954 3.6954 8.4754 8.4754-8.4754 8.4754 3.6954 3.6954 8.4754-8.4754 8.4754 8.4754 3.6954-3.6954-8.4754-8.4754 8.4754-8.4754-3.6954-3.6954z"
        />
      </svg>
    </div>
  </div>
</div>


`;

class Item extends HTMLElement {
  shadowRoot;
  button;
  #front;
  #touchX;
  #maxX = 84;
  #currentX;
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "closed" });
  }

  initialize() {
    this.button = this.shadowRoot.querySelector(".button");
    this.#front = this.shadowRoot.querySelector(".front");

    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);

    this.button.onmousedown = (ev) => this.#mouseDown(ev);
    this.button.onclick = () => {
      if (this.#currentX === 0) this.dispatchEvent(new CustomEvent("clicked"));
    };
  }

  #mouseDown(ev) {
    this.#touchX = ev.x;
    document.addEventListener("mouseup", this.mouseUp);
    document.addEventListener("mousemove", this.mouseMove);
    this.#front.style.transition = "none";
    this.#currentX = 0;
  }

  /**
   * Handles the mouse up event.
   */
  mouseUp() {
    document.removeEventListener("mouseup", this.mouseUp);
    document.removeEventListener("mousemove", this.mouseMove);

    if (this.#currentX === this.#maxX)
      this.dispatchEvent(new CustomEvent("delete"));

    this.#front.style.transition = "transform .15s ease-in-out";
    this.#front.style.transform = "translateX(0)";

    this.#touchX = 0;
  }

  /**
   * Handles the mouse move event.
   * @param {MouseEvent} ev - The mouse move event object.
   */
  mouseMove(ev) {
    this.#currentX = this.#touchX - ev.x;
    if (this.#currentX < 0) this.#currentX = 0;
    if (this.#currentX > this.#maxX) this.#currentX = this.#maxX;

    this.#front.style.transform = `translateX(-${this.#currentX}px)`;
  }
}

/**
 * Represents a custom web component for a task item.
 * @class TaskItem
 * @extends HTMLElement
 */
class TaskItem extends Item {
  static observedAttributes = ["title"];

  constructor() {
    super();

    this.shadowRoot.append(taskItemTemplate.content.cloneNode(true));
    this.initialize();
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "title") {
      this.shadowRoot.querySelector("label").innerText = newValue;
    }
  }

  //Setters and Getters
  get title() {
    return this.getAttribute("title");
  }

  set title(value) {
    this.setAttribute("title", value);
  }
}

customElements.define("task-item", TaskItem);

//CHECKBOX
/**
 * Represents a template for a checkbox.
 * @type {HTMLTemplateElement}
 */
const checkItemTemplate = document.createElement("template");
checkItemTemplate.innerHTML = `
<style>
    @import url("./css/system.css");
    *{
        margin: 0;
        padding: 0;
    }
    .button {
      position: relative;
      overflow: hidden;
      width: 100%;
      cursor: pointer;
    }
    
    .button:active .front label,
    .button:active .front .icon {
      transform: scale(0.9);
    }
    
    .front {
      position: absolute;
      display: flex;
      inset: 0;
      gap: 10px;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-text-dark);
      padding: 20px;
      transition: transform 0.3s ease-in-out;
    }
    
    .back {
      display: flex;
      justify-content: flex-end;
      background-color: var(--color-secondary);
      padding: 20px;
    }
    
    label {
      font-size: 36px;
      line-height: 36px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
      color: var(--color-text-light);
    }

    .checkbox{
      background-color: var(--color-text-light);
      padding: 5px;
    }
    
    .icon {
      width: 48px;
      height: 48px;
      min-width: 48px;
      min-height: 48px;
    }

    .checkbox svg{
      display: none;
    }
    
</style>

<div class="button">
  <div class="front">
    <label for="">Examples</label>
    <div class="checkbox icon">
      <svg width="100%" height="100%" version="1.1" viewBox="0 0 24.342 24.342" fill="var(--color-text-dark)">
        <path d="m20.497 2.6458 3.8447 3.865-15.105 15.185-9.2366-9.2856 3.8447-3.865 5.3919 5.4205z"/>
      </svg>
    </div>
  </div>
  <div class="back">
    <div class="icon">
      <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-light)">
        <path
          d="m12.171 8.4754-8.4754-8.4754-3.6954 3.6954 8.4754 8.4754-8.4754 8.4754 3.6954 3.6954 8.4754-8.4754 8.4754 8.4754 3.6954-3.6954-8.4754-8.4754 8.4754-8.4754-3.6954-3.6954z"
        />
      </svg>
    </div>
  </div>
</div>

`;

/**
 * Represents a custom web component for a checkbox.
 * @class CheckItem
 * @extends HTMLElement
 */

class CheckItem extends Item {
  static observedAttributes = ["title", "checked"];

  #checkbox;
  #checkicon;
  #isCheked;
  constructor() {
    super();

    this.shadowRoot.append(checkItemTemplate.content.cloneNode(true));
    this.#checkbox = this.shadowRoot.querySelector(".checkbox");
    this.#checkicon = this.#checkbox.querySelector("svg");

    this.#checkbox.onclick = () => {
      this.#isCheked = this.#isCheked === "true" ? "false" : "true";
      this.dispatchEvent(
        new CustomEvent("checked", {
          detail: {
            checked: this.#isCheked,
          },
        })
      );
      this.#checkicon.style.display =
        this.#isCheked === "true" ? "initial" : "none";
    };

    this.initialize();
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    switch (attrName) {
      case "title":
        this.shadowRoot.querySelector("label").innerText = newValue;
        break;

      case "checked":
        this.#isCheked = newValue;
        this.#checkicon.style.display =
          this.#isCheked === "true" ? "initial" : "none";
        break;

      default:
        break;
    }
  }

  //Setters and Getters
  get checked() {
    return this.getAttribute("checked");
  }

  set checked(value) {
    this.setAttribute("checked", value);
  }

  get title() {
    return this.getAttribute("title");
  }

  set title(value) {
    this.setAttribute("title", value);
  }
}

customElements.define("check-item", CheckItem);

//TODO Model

const TodoModalTemplate = document.createElement("template");
TodoModalTemplate.innerHTML = `
<style>
#container {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-secondary);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
#container div {
  width: 400px;
  height: 400px;
  background-color: var(--color-secondary);
}
.icons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.icons svg {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
<div id="container">
  <h1>Add task</h1>
  <input type="text" placeholder="Item name" />
  <div class="icons">
    <svg
    id="cross"
    width="100%"
    height="100%"
    version="1.1"
    viewBox="0 0 24.342 24.342">
      <path
      d="m12.171 8.4754-8.4754-8.4754-3.6954 3.6954 8.4754 8.4754-8.4754 8.4754 3.6954 3.6954 8.4754-8.4754 8.4754 8.4754 3.6954-3.6954-8.4754-8.4754 8.4754-8.4754-3.6954-3.6954z"/>
    </svg>
    <svg
    id="check"
    width="100%"
    height="100%"
    version="1.1"
    viewBox="0 0 24.342 24.342">
      <path d="m20.497 2.6458 3.8447 3.865-15.105 15.185-9.2366-9.2856 3.8447-3.865 5.3919 5.4205z"/>
    </svg>
  </div>
</div>
`;

class TodoModal extends HTMLElement {
  shadowRoot;
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "closed" });
    this.shadowRoot.append(TodoModalTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#cross").onclick = () =>
      this.dispatchEvent(new CustomEvent("closed"));

    this.shadowRoot.querySelector("#check").onclick = () => {
      const input = this.shadowRoot.querySelector("input");
      this.dispatchEvent(new CustomEvent("added", { detail: input.value }));
      input.value = "";
    };
  }

  show() {
    this.shadowRoot.querySelector("#container").style.display = "initial";
  }

  hide() {
    this.shadowRoot.querySelector("#container").style.display = "none";
  }
  
//Setters and Getters
  get value() {
    return this.shadowRoot.querySelector("input").value;
  }

  set value(value) {
    this.shadowRoot.querySelector("input").value = value;
  }
}

customElements.define("todo-modal", TodoModal);
