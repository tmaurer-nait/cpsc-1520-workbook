/*
Fetch Fundamentals
In this example we're going to generate random pictures of dogs.
1. Select the random dog button and add a click event
    listener on it.
2. Create the function get random dog with the fetch api.
    - documentation for the dog api here https://dog.ceo/dog-api/
    - explore and display what the promise returns.
3. Create a function that will select the image 
4. Call the get random dog function in your event listener,
    and call it when the page loads.
*/

let randomDogButton = document.querySelector("#new-dog-button");

randomDogButton.addEventListener("click", () => {
  getRandomDog();
});

const getRandomDog = () => {
  // Fetch the dog url
  let dogURL = "https://dog.ceo/api/breeds/image/random";
  fetch(dogURL)
    .then((response) => {
      console.log(response.status);
      // then get the json body from the response
      return response.json();
    })
    .then((dogObject) => {
      console.log(dogObject);
      // then display the dog image
      displayDogImage(dogObject.message);
    });
};

const displayDogImage = (imageUrl) => {
  // get the dog image element
  let dogImageElement = document.querySelector(".dog-image");
  // update the src attribute
  dogImageElement.setAttribute("src", imageUrl);
};

getRandomDog();
