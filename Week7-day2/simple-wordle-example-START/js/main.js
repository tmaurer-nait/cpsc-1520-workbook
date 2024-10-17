/*
We're going to build wordle without the keyboard.

1. Add an event listener that listens to the form
2. Validate if the value to see if it's five characters
3. Create a function called "addguess" which pushes the guess on the guesses array
   Note: this is going to to take our new guess as a parameter
4. only call the add guess function if the form is valid
5. Create a showGuessOnPage function which will show the guess on the page
    a. return early if there are no guesses
    b. create a selector that will select the guess row characters as a nodelist
    c. using foreach and your knowledge of accessing indexes to add each letter to
       each element
    d. create a isCharacterInCorrectPlace function to check if the character is in the right
       index of the word
       - if it is add the 'correct-letter-placement' class to the element
       - return the function early if it is so that we can check the next character
    e.  create a isCharacterInWord function to check if the character is in the function
        - add the incorrect-letter-placement class to the element if it is
        - Note if it's in the correct placement it should have been true in the function
          above
6. Show the message in the element with the class wordle-success if it's successful
   Note: you can use includes on an array!
   We're going to create a function that will check this each guess!

*/

let correctWord = "study";
let guesses = [];
let wordleForm = document.querySelector("#wordle-form");
let congratsElement = document.querySelector(".wordle-success");

wordleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let guessElement = event.target.elements["guess"];
  let guessValue = guessElement.value;

  let isValid = true;

  // Trim just removes leading and trailing whitespace
  if (guessValue.trim().length !== 5) {
    isValid = false;
    guessElement.classList.add("is-invalid");
  } else {
    guessElement.classList.remove("is-invalid");
  }

  if (isValid) {
    // Add the guess to the array
    addGuess(guessValue);

    // check the wordle
    showGuessOnPage();

    revealIfCorrect();
  }
});

const addGuess = (guess) => {
  guesses.push(guess);
  console.log("Guesses: ", guesses);
};

// Character is the letter we are checking, index is its location in the word
const isCharacterInCorrectPlace = (character, index) => {
  if (correctWord.toLowerCase()[index] === character.toLowerCase()) {
    return true;
  } else {
    return false;
  }
  // simplified version
  //   return correctWord.toLowerCase()[index] === character.toLowerCase();
};

const isCharacterInWord = (character) => {
  if (correctWord.toLowerCase().includes(character.toLowerCase())) {
    return true;
  } else {
    return false;
  }
  // simplified version
  //   return correctWord.toLowerCase().includes(character.toLowerCase());
};

const showGuessOnPage = () => {
  // Check if guesses are 0 and return early
  if (guesses.length === 0) {
    return;
  }

  // The full array length - 1 because we start at 0
  let lastGuessIndex = guesses.length - 1;

  // Get all character box elements in the correct row
  let selector = `.guess-${lastGuessIndex} .guess-character`;
  let characterDivs = document.querySelectorAll(selector);

  characterDivs.forEach((element, idx) => {
    // element points to the box on the screen
    // idx is the index of that box in the row
    // Put the correct character in the box
    let lastGuess = guesses[lastGuessIndex];
    let letter = lastGuess[idx];
    element.innerText = letter;
    // Check if character is in right place
    if (isCharacterInCorrectPlace(letter, idx)) {
      // Add a correct letter and place class
      element.classList.add("correct-letter-placement");
    } else if (isCharacterInWord(letter)) {
      // Check if character is in word
      // Add a correct letter class
      element.classList.add("incorrect-letter-placement");
    }
  });
};

const revealIfCorrect = () => {
  if (guesses.includes(correctWord)) {
    // Reveal correct word element
    congratsElement.classList.remove("hidden");
  }
};
