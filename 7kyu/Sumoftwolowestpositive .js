/*
Create a function that returns the sum of
the two lowest positive numbers given an array of
minimum 4 integers. No floats or empty arrays will be passed.
*/
let sort= [19, 5, 42, 2, 77]
function sumTwoSmallestNumbers(numbers) {
  let sortedArray=numbers.sort((a,b)=>a-b)
  return(sortedArray[0]+ sortedArray[1])
};


console.log(sumTwoSmallestNumbers(sort));
