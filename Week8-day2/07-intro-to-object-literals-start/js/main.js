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

  // TODO: add the todo to the list

  console.log(newTodo);

  // TODO: reset the form
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

  // TODO: Render the todos
};

const renderOneTodo = (todo, index) => {
  // render the todo item
  let newTodoHTML = `
        <li class="list-group-item">
            <input class="form-check-input todo-status"
                data-todo-id="${index}"
                type="checkbox"
                value="todo-${index}"
                COMPLETE HERE>
            ${todo.description}
        </li>`;
  todoList.innerHTML += newTodoHTML;
};

const renderTodos = () => {
  todoList.innerHTML = "";

  todos.forEach(renderOneTodo);

  todos.forEach((todo, index) => {
    // render the todo item
    let newTodoHTML = `
        <li class="list-group-item">
            <input class="form-check-input todo-status"
                data-todo-id="${index}"
                type="checkbox"
                value="todo-${index}"
                COMPLETE HERE>
            ${todo.description}
        </li>`;
    todoList.innerHTML += newTodoHTML;
  });
};
