/*
Fetch Fundamentals
In this example we're going to get the top news stories from 
1. Select all stories and get stories button.
    - Add an event listener on the button that will load the stories
    (function for this cretaed below.)
2. Create a function that will load all of the story ids.
    - you'll use the fetch api on the top stories endpoint to do this.
    - Documentation for top stories api endpoint https://github.com/HackerNews/API#new-top-and-best-stories
3. Create a function that will fetch the story data using the id and
    display is on the page.
    - you'll use the fetch api on the items end point to do this.
    - Documentation for items api endpoint https://github.com/HackerNews/API#items
    - The HTML 
    <a href="URL HERE" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">TITLE HERE</h5>
        <small>STORY SCORE HERE</small>
        </div>
        <p class="mb-1">TIMESTAMP HERE </p>
        <small>AUTHOR HERE</small>
    </a>
4. Create a function that will convert the date into something readable
    rather than a timestamp.

*/

// Select the allStories element
let allStoriesElement = document.querySelector(".hn-stories");
// Select the getStories button
let getStoriesButton = document.querySelector(".fetch-stories");
// Create some variable that will store all the stories
let stories = [];

const loadStoryIds = () => {
  // ENDPOINT URL
  let topStoryIdsURL = "https://hacker-news.firebaseio.com/v0/topstories.json";
  // fetch
  fetch(topStoryIdsURL)
    .then((response) => {
      // then response to json
      return response.json();
    })
    .then((storyIds) => {
      // then do something with the ids
      storyIds.forEach((storyId) => {
        loadStory(storyId);
      });
    });
};

// This function fetches a story with a given id
// And renders it on the page
const loadStory = (storyId) => {
  // ENDPOINT URL
  let storyUrl = ` https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
  // fetch
  fetch(storyUrl)
    .then((response) => {
      // then response to json
      return response.json();
    })
    .then((storyObject) => {
      console.log(storyObject);
      // then render it to the paxge
      renderStory(storyObject);
    });
};

// This takes in a story object
// renders it to the page
const renderStory = (storyObject) => {
  // create the template html
  let template = `<a href="${
    storyObject.url
  }" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${storyObject.title}</h5>
        <small>${storyObject.score}</small>
        </div>
        <p class="mb-1">${convertTimeStampToDate(storyObject.time)}</p>
        <small>${storyObject.by}</small>
    </a>`;
  // Add the template html to the stories element
  allStoriesElement.innerHTML += template;
};

// takes in a timestamp, returns a readable date
const convertTimeStampToDate = (timestamp) => {
  let date = new Date(); // give this milliseconds

  let readableDate = ``; // toLocaleDateString, toLocaleTimeString
  return readableDate;
};

// Hook this up to the button click event
loadStoryIds();
