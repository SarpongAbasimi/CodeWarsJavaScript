function number(ans){
let myArray= []
let originalArray=ans
let code=originalArray.splice(0,3);
let putparen= code.push(")");
let unshift= code.unshift("(");
let join =code.join("");
//working on second half
let second= originalArray.splice(0,3).join("");
let last = originalArray.splice(0,4).join("");
myArray.push(second,last);
let finaljoin=myArray.join("-")
let newNumber=join +" "+finaljoin;
return(newNumber);
}


console.log(number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//Other solutions
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') '
      + numbers.substring(3, 6)
      + '-'
      + numbers.substring(6);
}


function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";

  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }

  return format;
}
