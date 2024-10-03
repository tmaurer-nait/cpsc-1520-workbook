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

  // Get the form input elements
  let titleElement = event.target.elements["budget-title"];
  let amountElement = event.target.elements["amount"];
  let descriptionElement = event.target.elements["budget-description"];

  // Get the form input values
  let titleValue = titleElement.value;
  let amountValue = amountElement.value;
  let descriptionValue = descriptionElement.value;

  // Validate the form inputs

  // Validate the title input
  if (isNotEmpty(titleValue)) {
    titleElement.classList.remove("is-invalid");
  } else {
    titleElement.classList.add("is-invalid");
  }

  // Validate the description
  if (isNotEmpty(descriptionValue)) {
    descriptionElement.classList.remove("is-invalid");
  } else {
    descriptionElement.classList.add("is-invalid");
  }

  // Validate the amount
  if (isGreaterThanZero(parseFloat(amountValue))) {
    amountElement.classList.remove("is-invalid");
  } else {
    amountElement.classList.add("is-invalid");
  }

  if (isValidForm(titleValue, descriptionValue, parseFloat(amountValue))) {
    // Add a line items
    addLineItem(titleValue, parseFloat(amountValue), descriptionValue);

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
  }
});

// function to add a budget item create function
// e.g.
// <li class="list-group-item list-group-item-action" aria-current="true">
// TITLE AMOUNT - DESCRIPTION</li>
const addLineItem = (title, amount, description) => {
  let newLineItem = `<li class="list-group-item list-group-item-action" aria-current="true">${title} ${moneyFormat(
    amount
  )} - ${description}</li>`;
  budgetListElement.innerHTML = budgetListElement.innerHTML + newLineItem;
};

// function to add a updateTotal function
function addToTotal(amount) {
  runningTotal += amount;
  // Before updating the inner text format it to look nice (add the dollar sign)
  budgetTotalElement.innerText = moneyFormat(runningTotal);
}

// function for general currency formatter
function moneyFormat(amount) {
  // This would be the more professional way to do this but is also more complicated
  // let formatter = Intl.NumberFormat("en-CA", {
  //   style: "currency",
  //   currency: "CAD",
  // });

  // let formattedAmount = formatter.format(amount);

  let formattedAmount = `$${amount}`;
  return formattedAmount;
}

// Validator function that returns true if text is not empty else false
const isNotEmpty = (text) => {
  // Start with validity being false (will change to true if valid)
  let isValid = false;

  // One way to check if text is empty
  // if (text !== "") {
  //   isValid = true;
  // }

  // Checking if text is longer than 0 characters
  if (text.length > 0) {
    isValid = true;
  }

  return isValid;
};

// Validator function that returns true if value is greater than 0 else false
function isGreaterThanZero(value) {
  if (value > 0) {
    return true;
  } else {
    return false;
  }

  // Other cleaner ways to do this
  // return value > 0 ? true : false;
  // return value > 0;
}

// Validate all 3 fields on the form
const isValidForm = (title, description, amount) => {
  let isValid = false;

  // If amount is less than or equal to zero set isValid to false
  if (isGreaterThanZero(amount) === false) {
    isValid = false;
  }

  // If title is empty set isValid to false
  // Using the ! to flip the boolean instead of checking for false (works either way)
  if (!isNotEmpty(title)) {
    isValid = false;
  }

  // If description is empty set isValid to false
  if (isNotEmpty(description) === false) {
    isValid = false;
  }

  // Using an OR
  // if (
  //   isGreaterThanZero(amount) == false ||
  //   isNotEmpty(title) == false ||
  //   isNotEmpty(description) == false
  // ) {
  //   isValid = false;
  // }

  //Using an AND
  // if (
  //   isGreaterThanZero(amount) &&
  //   isNotEmpty(title) &&
  //   isNotEmpty(description)
  // ) {
  //   isValid = true;
  // }

  return isValid;
};
