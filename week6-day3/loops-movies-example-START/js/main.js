// this is our javascript file.
console.log("The JS file is linked");

// intercept the form.
let movieFilterForm = document.querySelector("#movie-filter-form");

// focus on the filter element
movieFilterForm.elements["filter-query"].focus();

// select all movie list items the descendant css selector
// .top-movies-list li

// get the form value and call the function filterItems

movieFilterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let filter = event.target.elements["filter-query"].value;
  console.log(filter);

  filterItems(filter);
});

/*


We're going to create a function named "filterItems"
that check each item contains our search query
- if it's not then we're going to add the "hidden-item" class
- if does include it we're going to remove the "hidden-item" class.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

*/

// Filter items using a for loop
// const filterItems = (filterValue) => {
//   // Get all the items
//   let allMovieItems = document.querySelectorAll(".top-movies-list li");
//   let moviesItemsArray = Array.from(allMovieItems);
//   //   console.log(moviesItemsArray);
//   //   console.log(moviesItemsArray[0]);

//   // For loop (length of all items)
//   for (let i = 0; i < moviesItemsArray.length; i++) {
//     // grab the element
//     let movieElement = moviesItemsArray[i];

//     // get the movie title (including year)
//     let movieTitle = movieElement.innerText.trim().toLowerCase();

//     // if item contains value
//     if (movieTitle.includes(filterValue.trim().toLowerCase())) {
//       // remove hidden item class
//       movieElement.classList.remove("hidden-item");
//     } else {
//       // add hidden item class
//       movieElement.classList.add("hidden-item");
//     }
//   }
// };

// filter items using a while loop
const filterItems = (filterValue) => {
  // Get all the items
  let allMovieItems = document.querySelectorAll(".top-movies-list li");
  let moviesItemsArray = Array.from(allMovieItems);
  //   console.log(moviesItemsArray);
  //   console.log(moviesItemsArray[0]);

  // For loop (length of all items)
  let i = 0;
  while (i < moviesItemsArray.length) {
    // grab the element
    let movieElement = moviesItemsArray[i];

    // get the movie title (including year)
    let movieTitle = movieElement.innerText.trim().toLowerCase();

    // if item contains value
    if (movieTitle.includes(filterValue.trim().toLowerCase())) {
      // remove hidden item class
      movieElement.classList.remove("hidden-item");
    } else {
      // add hidden item class
      movieElement.classList.add("hidden-item");
    }
    i++;
  }
};
