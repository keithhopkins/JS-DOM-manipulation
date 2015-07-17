/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in

NOTE: use a `for` loop to make this happen.

*/

function sum(options){
  var total=0;
  for(var i=0;i<options[0].length;i++){
    total+=Number(options[0][i].value);
  }
  return total;
}
