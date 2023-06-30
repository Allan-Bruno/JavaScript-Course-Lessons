const input = document.getElementById("input");
const errorMsg = document.getElementById("errorMsg");
const list = document.getElementById("toDos");
const overlay = document.getElementById("overlay");
let contentSpan;
let newTaskValue;

function makeNewList(content) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<span class="focus:outline-slate-300 p-1" id ="content">${content}</span>
  <span id="buttons">
  <button id="removeBtn" class="bg-red-700 text-slate-50 p-1 text-center rounded">Remove</button>
  <button id="editBtn" class="bg-sky-700 text-slate-50 text-center p-1 rounded">Edit</button>
  </span>
  `;
  list.appendChild(listItem);
}

document.getElementById("createBtn").addEventListener("click", () => {
  const content = input.value.trim();
  errorMsg.classList.remove("grid");
  errorMsg.classList.add("hidden");

  if (content.length <= 0) {
    errorMsg.classList.remove("hidden");
    errorMsg.classList.add("grid");
    return;
  }

  makeNewList(content);

  input.value = "";
});

document.getElementById("toDos").addEventListener("click", (e) => {
  const target = e.target;
  const targetId = target.id;
  const parentElement = target.parentNode;
  const buttonsDiv = parentElement.parentElement.querySelector("#buttons");
  contentSpan = parentElement.parentElement.querySelector("#content");
  newTaskValue = document.getElementById("editInput");

  if (targetId === "removeBtn") {
    parentElement.parentElement.remove();
  }

  if (targetId === "editBtn") {
    overlay.classList.remove("hidden");
    newTaskValue.focus();
  }

  if (targetId === "doneBtn") {
    buttonsDiv.innerHTML = `
      <button id="removeBtn" class="bg-red-700 text-slate-50 p-1 text-center rounded">Remove</button>
      <button id="editBtn" class="bg-sky-700 text-slate-50 text-center p-1 rounded">Edit</button>
    `;
  }
});

function hide() {
  overlay.classList.add("hidden");
}

function finishEdit() {
  overlay.classList.add("hidden");

  contentSpan.textContent = newTaskValue.value;

  newTaskValue.value = "";
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});
