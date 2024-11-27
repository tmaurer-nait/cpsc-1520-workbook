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
  }

  // This function adds this card to the to learn list
  render() {
    this.toLearnListElement.append(this.element);
  }
}

export { Card };
