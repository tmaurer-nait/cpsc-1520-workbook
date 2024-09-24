console.log("drawing js linked");

let body = document.querySelector("body");
let main = document.querySelector("main");

let isMouseDown = false;

body.addEventListener("mousemove", (event) => {
  let box = document.querySelector(".green-box");
  box.style.top = `${event.y}px`;
  box.style.left = `${event.x}px`;

  if (isMouseDown) {
    drawBox(event.x, event.y);
  }
});

// add an event listener to mousedown
body.addEventListener("mousedown", (event) => {
  console.log("mouse is pressed down");
  isMouseDown = true;
});

body.addEventListener("mouseup", (event) => {
  console.log("mouse is lifted up");
  isMouseDown = false;
});

/**
 * draws a box at the given x y coordinates
 * @param {number} x the x coordinate of the top left corner
 * @param {number} y the y coordinate of the top left corner
 */
const drawBox = (x, y) => {
  let newBox = `<div class="blue-box"
    style="top: ${y}px; left: ${x}px;"
  ></div>`;

  main.innerHTML += newBox;
};
