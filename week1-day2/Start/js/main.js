// This is our javascript file
console.log("test this javascript file");

let incorrectText = document.querySelector("#update-text > p");

console.log(incorrectText.innerText);

incorrectText.innerText = "Correct the typos in this text.";

let updateHTML = document.querySelector("#update-html > p");
let currentText = updateHTML.innerText;
updateHTML.innerHTML = "<strong>" + currentText + "</strong>";

let updateColour = document.querySelector("#update-colour > p");
updateColour.style.color = "blue";

