/*
Timer Fundamentals
1. select all of the button elements and the lap elements
2. add an event listener for the start button
3. create variables for the currentTime, an isStopWatchRunning and the timerInterval
4. create a function named "startTimer" to start the interval
    - set the isStopWatchRunning to true
    - use setInterval to set the "timerInterval" variable
        - set the "time interval" or "delay" to 10ms
    - in the setInterval callback function, increment the time
5. create function named setTimerValue that will display the time on the page
    - call this function in the setInterval callback from the previous step
    - make it more readable (i.e. seconds:hundredths of seconds)
6. in the stop button listener, set the isStopWatchRunning to false and clear the interval
    - observe the page how the timer stops
    - if you click start, the timer continues
7. create a function to add new lap
    - get the lap time which is the current lap time minus the last lap time
    - display it on the page with the following html (in all laps section)
         <li class="list-group-item">Lap CURRENT LAP: CURRENT LAP TIME</li>
    - increase the currentLap
    - add the lastLapTime
8. in the add lap event listener, call the function above
*/

// Select the buttons, and laps element
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let lapButton = document.querySelector(".lap");
let lapsElement = document.querySelector(".all-laps");
let timerValue = document.querySelector(".timer-value");

// Create the necessary variables
let currentTime = 0;
let isStopWatchRunning = false;
let timerInterval = null;

// Add event listener for start button
startButton.addEventListener("click", () => {
  // Start the timer
  startTimer();
});

// Create a function named startTimer
const startTimer = () => {
  // set isStopWatchRunning to true
  isStopWatchRunning = true;
  // use setInterval to create a timer
  // set the timer interval to 10ms (0.01s)
  // Store the interval id in timerInterval
  timerInterval = setInterval(() => {
    // Increment the currentTime in the interval callback
    currentTime += 1;
    // Show the currentTime
    setTimerValue();

    // If stopwatch not running
    if (!isStopWatchRunning) {
      // clear the interval
      clearInterval(timerInterval);
    }
  }, 10);
};

// add a listener to the stop button
stopButton.addEventListener("click", () => {
  // when clicked set isStopWatchRunning to false
  isStopWatchRunning = false;
});

// add a click listener to the lap button
// call the addNewLap function

const addNewLap = () => {
  // calculate the current lap time
  // increment the current lap
  // add the new lap to the laps element html
};

const setTimerValue = () => {
  // Get the seconds from the currentTime
  let first = Math.floor(currentTime / 100);
  // get the hundredths from the current time
  let second = currentTime % 100;
  // update the timer value html to display the currentTime
  timerValue.innerText = `${first}:${second}`;
};
