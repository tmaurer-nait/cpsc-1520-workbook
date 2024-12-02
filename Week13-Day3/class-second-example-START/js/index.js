/*
Using Classes and Objects.

In this example we're going to create some balloons that when we click on them
they're going to get removed from the screen.

1. import bootstrap and our css
2. create the balloon class in the balloon.js folder
3. Use this class and initialize a few. 
4. write an event listener that removes the balloons from the page.


*/

// import our bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/main.css";
import { Balloon } from "./utils/balloon";

let allBalloons = document.querySelector(".balloons");

// TODO: REPLACE IN THE FUTURE
// let balloon = new Balloon();
// balloon.addToElement(allBalloons);

let numBalloons = 0;
let balloonRespawner = null;

// TODO: Add multiple balloons
const addBalloons = () => {
  // Using a forloop
  const MAX_BALLOONS = 10;
  for (let i = 0; i < MAX_BALLOONS; i++) {
    let balloon = new Balloon();
    balloon.addToElement(allBalloons);
    numBalloons++;
  }
};

addBalloons();

// TODO: Add event listeners to remove balloons
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("single-balloon")) {
    event.target.remove();
    numBalloons--;
    if (numBalloons === 0) {
      clearInterval(balloonRespawner);
    }
  }
});

const respawnBalloons = () => {
  // respawn a balloon every second
  balloonRespawner = setInterval(() => {
    let balloon = new Balloon();
    balloon.addToElement(allBalloons);
    numBalloons++;
  }, 1000);
};

respawnBalloons();
