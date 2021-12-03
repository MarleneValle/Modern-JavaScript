//add new todos
const addForm = document.querySelector(".add");

//reference to inject the "generateTemplete" function into the Ul
const list = document.querySelector(".todos");
///reference to the input for filtering
const search = document.querySelector(".search input");

//create a function to generate a template every tame a todo is added
const generateTemplate = (todo) => {
  const html = `<li
          class=" list-group-item d-flex justify-content-between align-items-center
          " >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
  list.innerHTML += html;
};
///adding new todos with the function generateTemplate that I created
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

//delete todos. add event listener to the UL instead to add it to every single trash bin
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//function that takes the input and trying to match against the todos and filter those out
const filterTodos = (input) => {
  Array.from(list.children) //passing the HTMLCollection into an Array and then chain a few methods
    .filter((todo) => !todo.textContent.toLowerCase().includes(input))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(input))
    .forEach((todo) => todo.classList.remove("filtered"));
};

///keyup event to filter the searchbar
search.addEventListener("keyup", () => {
  const input = search.value.trim().toLowerCase();
  filterTodos(input);
});
