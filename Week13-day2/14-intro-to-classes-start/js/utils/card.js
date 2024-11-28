import { createCardElement } from "../dom/card.js";

class Card {
  // These are optional initializers.
  // They are just to show you which properties exist on this class
  element;
  toLearnListElement;
  understoodListElement;

  constructor({ title, description }) {
    this.element = createCardElement({ title, description });
    this.toLearnListElement = document.querySelector(".to-learn-stickies");
    this.understoodListElement = document.querySelector(".understood-stickies");

    // When I create the card, add it to the to learn list
    this.render();

    // Bind the event handlers
    this.addEventListeners();
  }

  // This function adds this card to the to learn list
  render() {
    this.toLearnListElement.append(this.element);
  }

  remove() {
    // Remove this element from the DOM
    this.element.remove();
  }

  moveToTop() {
    // Move the element to the start
    this.toLearnListElement.insertBefore(
      this.element,
      this.toLearnListElement.firstElementChild
    );
  }

  moveToUnderstood() {
    // Move the element to the understood
    this.understoodListElement.append(this.element);
  }

  addEventListeners() {
    // Select the necessary elements
    let cardBody = this.element.children[0];
    let removeButton = cardBody.children[2];
    let topButton = cardBody.children[3];
    let understoodButton = cardBody.children[4];

    // bind the remove button
    removeButton.addEventListener("click", () => {
      this.remove();
    });
    // bind the top priority button
    topButton.addEventListener("click", () => {
      this.moveToTop();
    });
    // bind the I get this button
    understoodButton.addEventListener("click", () => {
      this.moveToUnderstood();
    });
  }
}

export { Card };
