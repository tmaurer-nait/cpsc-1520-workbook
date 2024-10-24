/*
    Todolist

    We're going to make a todolist that counts how many todos we've completed.
    We'll do this using objects in the todos array shown below.

    HTML FOR The todo

    <li class="list-group-item">
        <input class="form-check-input todo-status"
            data-todo-id="INDEX HERE"
            type="checkbox"
            value="todo-INDEX HERE"
            COMPLETE HERE>
        DESCRIPTION HERE
    </li>

*/

// Select necessary elements
let todoForm = document.querySelector("#add-todo-form");
let todoList = document.querySelector(".todo-list");
let todoCount = document.querySelector("#todo-complete-count");

// On form submit
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the input value
  let todoDescriptionElement = event.target.elements["todo-description"];

  // Create a new todo object
  let newTodo = {
    description: todoDescriptionElement.value,
    complete: false,
  };

  // add the todo to the list

  addTodo(newTodo);

  // reset the form
  todoDescriptionElement.value = "";
});

// Listen to changes to the todoList
todoList.addEventListener("change", (event) => {
  // get the checkbox element
  let todoCheckbox = event.target;
  let todoIndex = todoCheckbox.getAttribute("data-todo-id");
  console.log(todoIndex);
  // See if the checkbox is checked

  // Update the todo in the list of todos
  // Recalculate the number of completed todos
});

let todos = [
  {
    description: "Buy Eggs",
    complete: false,
  },
  {
    description: "Buy Milk",
    complete: true,
  },
];

const addTodo = (todoObject) => {
  todos.push(todoObject);

  // Render the todos
  renderTodos();
};

const renderTodos = () => {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    // If you don't want to use the ternary below replace it with
    // ${checked} and uncomment this code
    // let checked = "";
    // if (todo.complete) {
    //   checked = "checked";
    // }

    // render the todo item
    let newTodoHTML = `
        <li class="list-group-item">
            <input class="form-check-input todo-status"
                data-todo-id="${index}"
                type="checkbox"
                value="todo-${index}"
                ${todo.complete ? "checked" : ""}>
            ${todo.description}
        </li>`;
    todoList.innerHTML += newTodoHTML;
  });
};
