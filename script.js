const list = document.getElementById("infi-list");

list.addEventListener("scroll", () => {
  const scrollTop = list.scrollTop;
  const scrollHeight = list.scrollHeight;
  const clientHeight = list.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight - 40) {
    addMoreItems();
  }
});

let nextItemNumber = 11; // Start with item 11 after the initial 10 items

function addMoreItems() {
  for (let i = 0; i < 2; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = `List Item ${nextItemNumber++}`;
    list.appendChild(newItem);
  }
}
