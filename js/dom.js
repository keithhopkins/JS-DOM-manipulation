/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/
var button = document.getElementById('sum-all');
var options = document.getElementsByName('prices');
button.addEventListener("click",function(){sumAll(options);});


function sumAll(opt){
  var total = sum(opt);
  //displays to page
  var answerDiv = document.getElementById('answer');
  answerDiv.innerHTML=total;
}
