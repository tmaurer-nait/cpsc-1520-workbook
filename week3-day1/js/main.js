// Add an event listener that increments a counter on the page

let buttonElement = document.querySelector(".btn-increment");

// Event listeners have 2 parameters, event type, callback function
// Whenever the add 1 button is clicked
buttonElement.addEventListener("click", () => {
  // Find the counter element
  let counterElement = document.querySelector(".counter");
  // Parse an int out of the counter string value
  // Then add 1 to the int and update the text
  counterElement.innerText = parseInt(counterElement.innerText) + 1;
});

// --------------------- PREVENTING DEFAULT BEHAVIOUR -----------------

// Grab the link element
let linkElement = document.querySelector(".link");

// Prevent the link from its default behaviour (Changing the page to the link)
linkElement.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Prevented the link from linking");
});

let formElement = document.querySelector(".form");
// In this case we are listening to the submit event on the form. Not a click event
formElement.addEventListener("submit", (evt) => {
  // never submit this form
  evt.preventDefault();
  console.log("yep");
});

// ------------------- PROPOGATION --------------------

// This is the parent element, we are selecting it to listen to any events
// propogated by the children
let colorsParent = document.querySelector(".colours");

colorsParent.addEventListener("click", (event) => {
  console.log(event.target.className);
  // The event.target points to the child element
  // In our case the className of the child is a color so we can use it to color the page
  document.body.style = "background: " + event.target.className;
});
