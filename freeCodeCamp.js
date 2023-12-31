//Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
//switch statements with a break 
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case "a": answer = "apple";
  break;
  case "b": answer = "bird";
  break;
  case "c": answer = "cat";
  break;
  default: answer = "stuff";
  break
}


  // Only change code above this line
  return answer;
}
switchOfStuff(1);

// Switch Statements istead of if else 
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line


switch(val){
  case "bob": 
  answer = "Marley";
  break;
  case 42: 
  answer = "The Answer";
  break;
  case 1:
  answer = "There is no #1";
  break;
  case 99: 
  answer = "Missed me by this much!";
  break;
  case 7:
  answer = "Ate Nine";
  break;
}


  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//Return True or False 
function isLess(a, b) {
  // Only change code below this line
return a < b;
  // Only change code above this line
}

isLess(10, 15);

//Retrun Undefined 
// Setup
function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b < 0){
  return undefined;
}


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);



//Case statements 
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
  case 2:
  case 3: 
  answer = "Low";
  break;
  case 4:
  case 5:
  case 6: 
  answer = "Mid";
  break;
  case 7: 
  case 8:
  case 9:
  answer = "High";
  break; 
}

  // Only change code above this line
  return answer;
}

sequentialSizes(1);
