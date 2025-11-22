//your code here!
// Select the list element (must exist in your HTML)
const list = document.getElementById("myList");

// Counter to keep numbering consistent
let itemCount = 0;

// ---- Add initial items ----
function addInitialItems() {
  for (let i = 0; i < 10; i++) {
    addListItem();
  }
}

// ---- Add a single <li> item ----
function addListItem() {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = "List Item " + itemCount;
  list.appendChild(li);
}

// ---- Add 2 items when reaching the end ----
function addMoreItems() {
  addListItem();
  addListItem();
}

// ---- Detect scroll to bottom ----
window.addEventListener("scroll", () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight;

  // When the user reaches the bottom (or near it)
  if (scrollPosition >= pageHeight - 5) {
    addMoreItems();
  }
});

// Initialize
addInitialItems();

