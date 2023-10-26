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
