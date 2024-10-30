/*
Fetch Fundamentals

This example requires you to send a local fetch request for a JSON
file, and to render the following HTML for each of the returned objects
in the array.
    
Sample HTML
    <div class="mt-3 card" >
        <img class="card-img-top" src="CAT PICTURE HERE" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">CAT NAME HERE </h5>
        <p class="card-text">CAT TEXT HERE</p>
        </div>
    </div>

Use the following list as a guide to complete the task:

- select any requried elements from the document
- create a getCats function that will fetch the local cats-with-jobs.json file
- create a renderCats function that will accept a single parameter, which
  should be an array of cat data
    - the function should iterate over the array (e.g. use .forEach()) and render
      each cat using the template HTML provided above
- call the getCats function, and pass the results to render cats
    - when the page loads, you should now see the cats rendered on the page
*/

const getCats = () => {
  // fetch the cats
  // then json the response
  // then display the cats

  // This is a snippet for fetching json data
  // fetch(URL)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //      DO SOMETHING WITH THE DATA
  //   });

  let catURL = "/data/cats-with-jobs.json";
  fetch(catURL)
    .then((response) => {
      return response.json();
    })
    .then((catArray) => {
      renderCats(catArray);
    });
};

const renderCats = (allCatsArray) => {
  // get the element to display to
  let catDisplayElement = document.querySelector(".cat-display");

  // reset the innerHTML of the element
  catDisplayElement.innerHTML = "";

  allCatsArray.forEach((catData) => {
    let templateHTML = `<div class="mt-3 card" >
        <img class="card-img-top" src="${catData.picture}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${catData.name}</h5>
        <p class="card-text">${catData.text}</p>
        </div>
    </div>`;
    catDisplayElement.innerHTML += templateHTML;
  });
};

getCats();
