// this is our javascript file.
console.log("Is this working?");

const getUsername = function () {
  let username = prompt("Enter your username");
  return username;
};

// Finds the element with the matching selector, and updates it's text
// to the given value
const updateElementText = function (selector, value) {
  let element = document.querySelector(selector);
  element.innerText = value;
};

const getDescription = function () {
  let description = prompt("Please enter the new description");
  return description;
};

const updateUsername = function () {
  let username = getUsername();
  updateElementText("#username", username);
};

const updateDescription = function () {
  let description = getDescription();
  updateElementText(".description", description);
};

updateUsername();
updateDescription();
