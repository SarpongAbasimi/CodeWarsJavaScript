/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F


let one =("Patrick Feeney"); */

function abb(input){
  //An empty Array
  //convert the input to uppercase and split it
  //Loop through the array and subtract the first letter of each element
  //Push those elements to the NewArray
  //Join the letters and return them
  let NewArray=[]
  let mySplit=input.toUpperCase().split(" ");
  for(let i = 0 ; i<mySplit.length;i++){
    NewArray.push(mySplit[i].substr(0,1));
  }
return (NewArray.join("."))
}

console.log(abb(one));
