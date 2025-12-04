const list = document.getElementById("infi-list");

let count = 1; // to keep track of list items

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
  }
}

// Add first 10 items initially
addItems(10);

// Add event listener for infinite scroll
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // user reached the bottom
    addItems(2);
  }
});
