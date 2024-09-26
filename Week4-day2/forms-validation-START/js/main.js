// we're going to use bootstrap validation
// https://getbootstrap.com/docs/5.0/forms/validation/
/*
  essentially what we're going to do here.
  - check if each form element's value is valid.
  - essentially we're going to pass the values to validator functions
      - these functions are going to return true or false values
        true if valid, false 
  - if it's invalid we're going to add the class "is-invalid"
      - this is going to show the divs with the "invalid-feedback"
        which has the 
  - also we're going to return early from the event handler if it's not valid
      - this is so we don't create the budget items.
*/

// intercept the form. and track required elements
let budgetFormElement = document.querySelector("#budget-form");
let budgetListElement = document.querySelector(".current-budget");
let budgetTotalElement = document.querySelector("#budget-total");

// create a variable to hold the running budget total
let runningTotal = 0;

// focus to the first element on page load
// The reason we are not using document.querySelector() is because the form elements (or inputs) won't always have ids
// or other selectable attributes. but they should always have names
budgetFormElement.elements["budget-title"].focus();
// document.querySelector("#budget-item").focus();

// add a submit listener
budgetFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form input values
  let titleValue = budgetFormElement.elements["budget-title"].value;
  let amountValue = budgetFormElement.elements["amount"].value;
  let descriptionValue = budgetFormElement.elements["budget-description"].value;

  // TODO: Validate the form inputs

  // Add a line items
  addLineItem(titleValue, amountValue, descriptionValue);

  // Reset the form
  // Method 1
  // budgetFormElement.elements["budget-title"].value = "";
  // budgetFormElement.elements["amount"].value = "";
  // budgetFormElement.elements["budget-description"].value = "";

  // Method 2
  budgetFormElement.reset();

  // Refocus the initial element
  budgetFormElement.elements["budget-title"].focus();

  // Update the budget total
  addToTotal(parseFloat(amountValue));
});

// function to add a budget item create function
// e.g.
// <li class="list-group-item list-group-item-action" aria-current="true">
// TITLE AMOUNT - DESCRIPTION</li>

const addLineItem = (title, amount, description) => {
  let newLineItem = `<li class="list-group-item list-group-item-action" aria-current="true">${title} ${amount} - ${description}</li>`;
  budgetListElement.innerHTML += newLineItem;
};

// function to add a updateTotal function
function addToTotal(amount) {
  runningTotal += amount;
  // TODO: Format this to look nicer
  budgetTotalElement.innerText = runningTotal;
}

// function for general currency formatter
