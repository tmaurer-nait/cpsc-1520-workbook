// this is our javascript file.

// intercept the form.
let form = document.querySelector("#budget-form");

// focus to the first element
form.elements["budget-title"].focus();

// create an event listener on the form.
form.addEventListener("submit", (event) => {
  // prevent the form from being submitted.
  event.preventDefault();

  // get the form element values for title, description and amount
  let title = event.target.elements["budget-title"].value;
  let description = event.target.elements["budget-description"].value;
  let amount = event.target.elements["amount"].value;

  // update current budget total
  updateTotal(amount);

  // add the item
  createLineItem(title, amount, description);

  // reset the values
  event.target.elements["amount"].value = "";
  event.target.elements["budget-description"].value = "";
  event.target.elements["budget-title"].value = "";

  // focus back at the title
  event.target.elements["budget-title"].focus();
});

// add a budget item create function
/*
<li class="list-group-item list-group-item-action" aria-current="true">
    TITLE HERE (AMOUNT HERE) - DESCRIPTION HERE
</li>
*/
const createLineItem = (title, amount, description) => {
  let budgetList = document.querySelector(".current-budget");
  let newLineItem = `<li class="list-group-item list-group-item-action" aria-current="true">
    ${title} (${amount}) - ${description}
   </li>`;
  budgetList.innerHTML += newLineItem;
};

// add a updateTotal function
const updateTotal = (amountToAdd) => {
  let budgetTotalElement = document.querySelector("#budget-total");
  let newTotal = parseInt(budgetTotalElement.innerText) + parseInt(amountToAdd);
  budgetTotalElement.innerText = newTotal;
};

let budgetListParent = document.querySelector(".current-budget");

// add active class to list item on mouseover
budgetListParent.addEventListener("mouseover", (event) => {
  console.log(event.target);
  event.target.classList.add("active");
});

// remove active class from list item on mouseout.
budgetListParent.addEventListener("mouseout", (event) => {
  console.log(event.target);
  event.target.classList.remove("active");
});
