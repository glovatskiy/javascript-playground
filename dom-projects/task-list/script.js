const input = document.querySelector(".input");
const list = document.querySelector(".list");
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    const inputValue = input.value;
    console.log(inputValue);
    const li = document.createElement("li");
    li.textContent = inputValue;
    list.appendChild(li);
    input.value = "";
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(deleteButton);
  }
});
