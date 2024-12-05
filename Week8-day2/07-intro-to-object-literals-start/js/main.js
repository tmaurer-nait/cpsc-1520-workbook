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

  // Select the clicked todo from todos array
  let selectedTodo = todos[todoIndex];

  // Update the todo in the list of todos
  selectedTodo.complete = !selectedTodo.complete;

  // Recalculate the number of completed todos
  calculateCompleteCount();
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

const addToComplete = (previousValue, currentTodo) => {
  // check if currentTodo is complete
  if (currentTodo.complete) {
    // if complete add 1 to previous value
    return previousValue + 1;
  }
  // else do nothing
  return previousValue;
};

const calculateCompleteCount = () => {
  let initialValue = 0;

  // Count the number of completed todos
  let numberOfCompleteTodos = todos.reduce(addToComplete, initialValue);

  console.log(numberOfCompleteTodos);

  // Display number of completed todos as a percentage
  todoCount.innerHTML = `${(numberOfCompleteTodos / todos.length) * 100}% done`;
};

const addTodo = (todoObject) => {
  todos.push(todoObject);

  // Render the todos
  renderTodos();
};

const renderTodos = () => {
  calculateCompleteCount();
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    // If you don't want to use the ternary below replace it with
    // ${checked} and uncomment this code
    // let checked = "";
    // if (todo.complete) {
    //   checked = "checked";
    // }

    // render the todo item
    // let newTodoHTML = `
    //     <li class="list-group-item">
    //         <input class="form-check-input todo-status"
    //             data-todo-id="${index}"
    //             type="checkbox"
    //             value="todo-${index}"
    //             ${todo.complete ? "checked" : ""}>
    //         ${todo.description}
    //     </li>`;

    // Create the list item
    let newTodoNode = document.createElement("li");
    newTodoNode.classList.add("list-group-item");

    // Create the input
    let todoInput = document.createElement("input");
    todoInput.classList.add("form-check-input", "todo-status");
    todoInput.setAttribute("type", "checkbox");
    todoInput.setAttribute("data-todo-id", `${index}`);
    todoInput.setAttribute("value", `todo-${index}`);
    // Option 1
    // todoInput.setAttribute("checked", "true");
    // Option 2
    todoInput.checked = todo.complete;

    // Create our text node
    let textNode = document.createTextNode(todo.description);

    // put everything together
    newTodoNode.appendChild(todoInput);
    newTodoNode.appendChild(textNode);
    todoList.appendChild(newTodoNode);
  });
};

renderTodos();
