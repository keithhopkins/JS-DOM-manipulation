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
  for(var i=0;i<options.length;i++){
    total+=Number(options[i].value);
  }
  return total;
}

function countSelected(options){
  var num=0;
  for(var i=0;i<options.length;i++){
    if(options[i].selected){
      num++;
    }
  }
  return num;
}

function sumSelected(options){
  var sum=0;
  for(var i=0;i<options.length;i++){
    if(options[i].selected){
      sum+=Number(options[i].value);
    }
  }
  return sum;
}

function averageAll(options){
  var average = sum(options);
  return average/options.length;
}

function averageSelected(options){
  return sumSelected(options)/countSelected(options);
}
