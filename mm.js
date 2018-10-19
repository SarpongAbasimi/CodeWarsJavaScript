//Rewrite this Code LEADING ZEROs are getting deleted //
/*Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.*/

function mycheck(strng){
 let match =strng.match(/\d/g);
 let matchSting=strng.match(/[a-z]/ig);
 let joinString=matchSting.join("");
 let split =strng.split("match");
 let myArray=[];
 if(match){
   for(let i = 0;i<match.length;i++){
    myArray.push(match[i]);
   }
   let join= myArray.join("");
   let toInt=parseInt(join);
    console.log(toInt);
   let increment= toInt + 1;
   joinString=matchSting.join("");
   return joinString.concat(increment);
 }
 else{
   return joinString.concat(1);
 }
}

console.log(mycheck("foo0043"));




//Solution
/*function incrementString (strng) {
var numberPattern = /\d+/g;
  lastChar = parseInt(strng.substr(strng.length - 1), 10);

  if (lastChar >= 0) {
    var matches = parseInt(strng.match(numberPattern)[0]) + 1;
    var slicer = matches.toString().length * -1;

    if(strng.match(numberPattern)[0].length < matches.toString().length) {
      slicer += 1;
    };

    return strng.slice(0, slicer) + matches;
  } else {
    return strng + 1;
  }
}
