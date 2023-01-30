window.addEventListener("load", () => {
  const container = document.getElementById("container");

  const content = [
    { tag: "p", text: "Text 1" },
    { tag: "div", text: "Text 2" },
    { tag: "footer", text: "Text 3" },
    { tag: "section", text: "Text 4" },
  ];

  for (let i = 0; i < content.length; i++) {
    const { tag, text } = content[i];
    const newElement = document.createElement(tag);
    const newContent = document.createTextNode(text);
    newElement.appendChild(newContent);
    container.appendChild(newElement);
  }
});
