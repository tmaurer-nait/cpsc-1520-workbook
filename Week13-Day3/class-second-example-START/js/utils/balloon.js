// create a balloon class that
// will create a balloon that is going to float up.
import image from "url:../../img/balloon.gif";

class Balloon {
  constructor() {
    // Create the balloon element
    this.element = this.createBalloonElement();
    // TODO: Call the float function
  }

  createBalloonElement() {
    let balloonGif = document.createElement("img");
    balloonGif.setAttribute("src", image);
    balloonGif.classList.add("single-balloon");

    // TODO: Resize element

    return balloonGif;
  }

  // TODO: style the balloon

  // TODO: Create a function that floats the balloon

  // Can be called to add a balloon to the container given
  addToElement(containerElement) {
    containerElement.append(this.element);
  }
}

export { Balloon };
