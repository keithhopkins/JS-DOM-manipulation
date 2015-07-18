/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/


var answerDiv = document.getElementById('answer');
var options = document.getElementsByName('prices')[0];


// gets the sum-all button and adds a click listener
var sumAllButton = document.getElementById('sum-all');
sumAllButton.addEventListener("click",sumAll);

// gets the count selected button and adds a click listener
var countSelectedButton = document.getElementById('count-selected');
countSelectedButton.addEventListener("click",displayCountSelected);

// gets the sum selected button and adds a click listener
var sumSelectedButton = document.getElementById('sum-selected');
sumSelectedButton.addEventListener("click",displaySumSelected);

// gets the average-all button and adds a click listener
var averageAllButton = document.getElementById('average-all');
averageAllButton.addEventListener("click",displayAverageAll);

// gets the average-selected button and adds a click listener
var averageSelectedButton = document.getElementById('average-selected');
averageSelectedButton.addEventListener("click",displayAverageSelected);

function sumAll(){
  var total = sum(options);
  answerDiv.innerHTML="$"+total;
}

function displayCountSelected(){
  var numSelected = countSelected(options);
  answerDiv.innerHTML=numSelected;
}

function displaySumSelected(){
  var sum = sumSelected(options)
  answerDiv.innerHTML="$"+sum;
}

function displayAverageAll(){
  var avg = averageAll(options);
  answerDiv.innerHTML = "$"+avg;
}

function displayAverageSelected(){
  var avg = averageSelected(options);
  answerDiv.innerHTML = "$"+avg;
}
