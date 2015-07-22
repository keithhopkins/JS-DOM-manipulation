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

function namesList(names){
  var nameList = names.split("\n");
  return nameList;
}

function firstNames(names){
  var nameList = namesList(names);
  var currentEl;
  var firstNameList = [];
  for(var i=0; i<nameList.length;i++){
    currentEl = nameList[i].split(" ");
    firstNameList.push(currentEl[0]);
  }
  return firstNameList;
}

function lastNames(names){
  var nameList = namesList(names);
  var currentEl;
  var lastNameList = [];
  for(var i=0; i<nameList.length;i++){
    currentEl = nameList[i].split(" ");
    lastNameList.push(currentEl[1]);
  }
  return lastNameList;
}

function nameLength(names){
  var nameList = namesList(names);
  for(var i=0;i<nameList.length;i++){
    nameList[i] += ": "+nameList[i].length;
  }
  return nameList;
}






