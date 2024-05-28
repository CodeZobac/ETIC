/**
 * @fileoverview This file contains the implementation of custom web components for a TODO application.
 * It includes the TodoHeader, TaskItem, and CheckItem components.
 * These components are responsible for rendering the header, task items, and check items respectively.
 * Each component has its own template and event handling logic.
 * The components are defined using the customElements.define() method.
 */
/**TODO HEADER */
const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<style>
    @import url("system.css");
    :host {
        background-color: var(--color-primary);
    }

    header {
        display: flex;
        align-items: center;
        gap: var(--gap);
        padding: var(--v-padding) var(--h-padding);
    }
    header * {
        padding: 0;
        margin: 0;
    }

    h1 {
        color: var(--color-text-light);
        font-size: clamp(32px, 4vw, 48px);
    }
    p {
        display: none;
        font-size: clamp(16px, 4vw, 24px);
        color: var(--color-text-dark);
        font-style: italic;
        text-transform: capitalize;
    }

    .icon {
        display: none;
        width: clamp(32px, 4vw, 48px);
        height: clamp(32px, 4vw, 48px);
        min-width: 32px;
        min-height: 32px;
        cursor: pointer;
        margin-left: auto
    }
</style>

<header>

<h1>TODOs</h1>
<p>Task name</p>
<div class="icon">
    <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-light)">
        <path d="m9.5578 24.342h-9.5578v-14.193l12.171-10.149 12.171 10.149v14.193h-9.5578v-7.5914h-5.226z" />
    </svg>
</div>

</header>

`;
class TodoHeader extends HTMLElement {
  static observedAttributes = ["state", "task-name"];
  shadowRoot;
  #taskName;
  #icon;
  /**
   * Represents a custom web component.
   * @constructor
   */
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "closed" });
    this.shadowRoot.append(headerTemplate.content.cloneNode(true));

    this.#taskName = this.shadowRoot.querySelector("p");
    this.#icon = this.shadowRoot.querySelector(".icon");

    this.#icon.onclick = () => this.dispatchEvent(new CustomEvent("clicked"));
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "state":
        if (newVal === "tasks") {
          this.#taskName.style.display = "none";
          this.#icon.style.display = "none";
        } else {
          this.#taskName.style.display = "initial";
          this.#icon.style.display = "initial";
        }
        break;
      case "task-name":
        this.#taskName.innerText = newVal;
        break;
    }
  }

  get state() {
    return this.getAttribute("state");
  }
  set state(val) {
    this.setAttribute("state", val);
  }

  get taskName() {
    return this.getAttribute("task-name");
  }
  set taskName(val) {
    this.setAttribute("task-name", val);
  }
}
customElements.define("todo-header", TodoHeader);

/** ITEM */
/**
 * Represents an item element.
 * @class
 * @extends HTMLElement
 */
class Item extends HTMLElement {
  shadowRoot;
  label;
  #front;
  #touchX;
  #maxX = 84;
  #currentX;
  constructor() {
    super();
  }

  /**
   * Initializes the web component.
   */
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

  /**
   * Handles the mouse down event.
   *
   * @param {MouseEvent} ev - The mouse event object.
   */
  #mouseDown(ev) {
    this.#touchX = ev.x;
    document.addEventListener("mouseup", this.mouseUp);
    document.addEventListener("mousemove", this.mouseMove);
    this.#front.style.transition = "none";
    this.#currentX = 0;
  }

  /**
   * Handles the mouse up event.
   * @returns {void}
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
/**TASK ITEM */
const taskItemTemplate = document.createElement("template");
taskItemTemplate.innerHTML = `

<style>
    @import url("system.css");

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

    label {
        font-size: clamp(32px, 4vw, 48px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        user-select: none;
        color: var(--color-text-dark);
    }

    .icon {
        width: clamp(32px, 4vw, 48px);
        height: clamp(32px, 4vw, 48px);
        min-width: 32px;
        min-height: 32px;
    }

    .back {
        display: flex;
        justify-content: flex-end;
        background-color: var(--color-secondary);
        padding: 20px;
    }
</style>
<div class="button">
    <div class="front">
        <label>Examples</label>
        <div class="icon">
            <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-dark)">
                <path
                    d="m12.164 3.25e-7 12.177 12.171-12.177 12.171-3.6954-3.6954 5.8624-5.8624h-14.331v-5.226h14.331l-5.8624-5.8624z" />
            </svg>
        </div>
    </div>

    <div class="back">
        <div class="icon">
            <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-light)">
                <path
                    d="m12.171 8.4754-8.4754-8.4754-3.6954 3.6954 8.4754 8.4754-8.4754 8.4754 3.6954 3.6954 8.4754-8.4754 8.4754 8.4754 3.6954-3.6954-8.4754-8.4754 8.4754-8.4754-3.6954-3.6954z" />
            </svg>
        </div>
    </div>

</div>


`;
/**
 * Represents a custom web component for a task item.
 * @extends Item
 */
class TaskItem extends Item {
  static observedAttributes = ["task-title"];

  /**
   * Represents the constructor of the web component.
   * @constructor
   */
  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: "closed" });
    this.shadowRoot.append(taskItemTemplate.content.cloneNode(true));

    this.label = this.shadowRoot.querySelector("label");
    this.initialize();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "task-title") {
      this.label.innerText = newVal;
    }
  }

  /**
   * Gets the title of the task.
   * @returns {string} The task title.
   */
  get title() {
    return this.getAttribute("task-title");
  }

  /**
   * Sets the title of the task.
   * @param {string} val - The task title.
   */
  set title(val) {
    this.setAttribute("task-title", val);
  }
}
customElements.define("task-item", TaskItem);

/** CHECK ITEM */
const checkItemTemplate = document.createElement("template");
checkItemTemplate.innerHTML = `
<style>
    @import url("system.css");
    .button {
        position: relative;
        overflow: hidden;
        width: 100%;
        cursor: pointer;
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

    label {
        font-size: clamp(32px, 4vw, 48px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        user-select: none;
        color: var(--color-text-light);
    }

    .checkbox {
        background-color: var(--color-text-light);
        padding: 5px;
    }

    .icon {
        width: clamp(32px, 4vw, 48px);
        height: clamp(32px, 4vw, 48px);
        min-width: 32px;
        min-height: 32px;
    }

    .back {
        display: flex;
        justify-content: flex-end;
        background-color: var(--color-secondary);
        padding: 20px;
    }
</style>
<div class="button">
    <div class="front">
        <label>Examples</label>
        <div class="checkbox icon">
            <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-dark)">
                <path d="m20.497 2.6458 3.8447 3.865-15.105 15.185-9.2366-9.2856 3.8447-3.865 5.3919 5.4205z"/>
            </svg>
        </div>
    </div>

    <div class="back">
        <div class="icon">
            <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-light)">
                <path
                    d="m12.171 8.4754-8.4754-8.4754-3.6954 3.6954 8.4754 8.4754-8.4754 8.4754 3.6954 3.6954 8.4754-8.4754 8.4754 8.4754 3.6954-3.6954-8.4754-8.4754 8.4754-8.4754-3.6954-3.6954z" />
            </svg>
        </div>
    </div>
</div>
`;
/**
 * Represents a custom check item element.
 * @extends Item
 */
class CheckItem extends Item {
  static observedAttributes = ["checked", "title"];

  #checkbox;
  #checkIcon;
  #isChecked = "false";
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "closed" });
    this.shadowRoot.append(checkItemTemplate.content.cloneNode(true));

    this.label = this.shadowRoot.querySelector("label");

    this.#checkbox = this.shadowRoot.querySelector(".checkbox");
    this.#checkbox.onclick = () => {
      this.#isChecked = this.#isChecked === "true" ? "false" : "true";
      this.dispatchEvent(
        new CustomEvent("checked", { detail: { checked: this.#isChecked } })
      );
      this.#checkIcon.style.display =
        this.#isChecked === "true" ? "block" : "none";
    };
    this.#checkIcon = this.#checkbox.querySelector("svg");
    this.initialize();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "checked":
        this.#isChecked = newVal;
        this.#checkIcon.style.display =
          this.#isChecked === "true" ? "block" : "none";
        break;
      case "title":
        this.label.innerText = newVal;
        break;
    }
  }

  /**
   * Gets the title attribute value.
   * @returns {string} The title attribute value.
   */
  get title() {
    this.getAttribute("title");
  }

  /**
   * Sets the title attribute value.
   * @param {string} val - The new title attribute value.
   */
  set title(val) {
    this.setAttribute("title", val);
  }

  /**
   * Gets the checked attribute value.
   * @returns {string} The checked attribute value.
   */
  get checked() {
    return this.getAttribute("checked");
  }

  /**
   * Sets the checked attribute value.
   * @param {string} val - The new checked attribute value.
   */
  set checked(val) {
    this.setAttribute("checked", val);
  }
}
customElements.define("check-item", CheckItem);

/** TODO DIALOG */
const todoDialogTemplate = document.createElement("template");
todoDialogTemplate.innerHTML = `
<style>
    @import url("system.css");

    :host, #overlay {
        position: absolute;
        inset: 0;
    }

    :host {
        display: none;
        justify-content: center;
        align-items: center;
    }

    #overlay {
        background-color: var(--color-text-dark);
        mix-blend-mode: multiply;
        backdrop-filter: blur(3px);
        opacity: 0;
        transition: opacity var(--speed) ease-in-out;
    }

    #dialog {
        display: flex;
        width: 100%;
        max-width: 400px;
        flex-direction: column;
        position: absolute;
        background-color: var(--color-primary);
        padding: var(--v-padding) var(--h-padding);
        gap: var(--gap);
        filter: drop-shadow(0px 4px 10px rgba(0,0,0,0.5));
        transition: transform var(--speed) ease-in-out, opacity var(--speed) ease;
        transform: translateY(50px);
    }

    h2, input {
        margin: 0;
        color: var(--color-text-dark);
    }
    h2 {
        font-size: 42px;
        font-weight: 500;
    }

    input {
        flex: 1;
        border: 1px solid var(--color-text-dark);
        padding: 15px 10px;
        font-size: 18px;
    }
    input:focus{
        outline: none;
    }

    #actions-container {
        display: flex;
        justify-content: flex-end;
        gap: var(--gap);
        flex: 1;
        margin-top: 20px;
    }

    button {
        border: none;
        flex: 1;
        background-color: transparent;
        height: 48px;
        padding: 10px;
        cursor: pointer;
    }
    button:active svg {
        transform: scale(0.9);
    }
    #confirm {
        background-color: var(--color-terciary);
    }

</style>

<div id="overlay"></div>

<div id="dialog">
    <h2>Modal Title</h2>
    <input type="text">
    <div id="actions-container">
        <button id="cancel">
            <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-dark)">
                <path d="m12.171 8.4754-8.4754-8.4754-3.6954 3.6954 8.4754 8.4754-8.4754 8.4754 3.6954 3.6954 8.4754-8.4754 8.4754 8.4754 3.6954-3.6954-8.4754-8.4754 8.4754-8.4754-3.6954-3.6954z"/>
            </svg>
        </button>
        <button id="confirm">
            <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-light)">
                <path d="m20.497 2.6458 3.8447 3.865-15.105 15.185-9.2366-9.2856 3.8447-3.865 5.3919 5.4205z"/>
            </svg>
        </button>
    </div>
</div>      
`;
/**
 * Represents a custom dialog element for creating todo items.
 * @extends HTMLElement
 */
class TodoDialog extends HTMLElement {
  static observedAttributes = ["title"];

  shadowRoot;

  #overlay;
  #dialog;
  #label;
  #input;
  /**
   * Represents a custom web component.
   * @constructor
   */
  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: "closed" });
    this.shadowRoot.append(todoDialogTemplate.content.cloneNode(true));

    this.#label = this.shadowRoot.querySelector("h2");

    this.#overlay = this.shadowRoot.querySelector("#overlay");
    this.#dialog = this.shadowRoot.querySelector("#dialog");
    this.#input = this.shadowRoot.querySelector("input");
    this.#input.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        confirmButton.click();
      }
    };

    const confirmButton = this.shadowRoot.querySelector("#confirm");
    confirmButton.onclick = () => {
      if (this.#input.value.length === 0) return;
      this.dispatchEvent(
        new CustomEvent("confirm", { detail: { value: this.#input.value } })
      );
      this.close();
    };
    this.#overlay.onclick = () => this.close();

    this.shadowRoot.querySelector("#cancel").onclick = () => this.close();
  }

  /**
   * Opens the dialog box with the specified title.
   * @param {string} title - The title of the dialog box.
   */
  open(title) {
    this.style.display = "flex";
    this.title = title;
    requestAnimationFrame(() => {
      this.#overlay.style.opacity = 1;
      this.#dialog.style.transform = "translateY(0)";
      this.#dialog.style.opacity = 1;
      this.#input.focus();
    });
  }

  /**
   * Closes the dialog box.
   */
  close() {
    this.style.display = "none";
    this.#overlay.style.opacity = 0;
    this.#dialog.style.transform = "translateY(50px)";
    this.#dialog.style.opacity = 0;
    this.#input.value = "";
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.#label.innerText = newVal;
  }

  get title() {
    return this.getAttribute("title");
  }
  set title(val) {
    this.setAttribute("title", val);
  }
}

customElements.define("todo-dialog", TodoDialog);
