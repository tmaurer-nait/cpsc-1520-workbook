// create a balloon class that
// will create a balloon that is going to float up.
import image from "url:../../img/balloon.gif";

class Balloon {
  MAX_HEIGHT = 200;
  MAX_WIDTH = 1720;

  constructor() {
    // Create the balloon element
    this.element = this.createBalloonElement();
    // Call the float function
    this.startFloating();
  }

  createBalloonElement() {
    let balloonGif = document.createElement("img");
    balloonGif.setAttribute("src", image);
    balloonGif.classList.add("single-balloon");

    // Reposition element initially
    this.leftMargin = Math.floor(Math.random() * this.MAX_WIDTH);
    this.bottomMargin = Math.floor(Math.random() * this.MAX_HEIGHT);

    this.setStyleAndPosition(balloonGif);

    return balloonGif;
  }

  // Style the balloon
  setStyleAndPosition(element) {
    element.style = `
    max-height: 200px;
    max-width: 200px;
    position: absolute;
    bottom: ${this.bottomMargin}px;
    left: ${this.leftMargin}px;
    `;
  }

  // Create a function that floats the balloon
  startFloating() {
    setInterval(() => {
      // increment the position variable
      this.bottomMargin += 1;
      // set the position using new variable
      this.setStyleAndPosition(this.element);
    }, 10);
  }

  // Can be called to add a balloon to the container given
  addToElement(containerElement) {
    containerElement.append(this.element);
  }
}

export { Balloon };
