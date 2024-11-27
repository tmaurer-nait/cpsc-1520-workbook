// This file will handle all of our API requests

// Store the BASE URL for the backend (usually this would be changeable)
const BASE_URL = "http://localhost:3000";

// THIS WILL BE THE URL FOR GETTING POSTS
// `${BASE_URL}/posts`

// This functions makes a fetch request and returns all the posts
const getAllPosts = () => {
  return fetch(`${BASE_URL}/posts`)
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      return posts;
    });
};

// I can call the above like this: getAllPosts().then((posts) => {DO SOMETHING})

const makeNewPost = (title, url, score) => {
  return fetch(`${BASE_URL}/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, url, score }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export { getAllPosts };
