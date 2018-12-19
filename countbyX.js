
/*

Create a function with two arguments that will return a list of length (n) with multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).


*/


function countBy(x, n) {
  const myArray=[];
  const mul =x*n;

  for(let i = 1; i < mul+1 ; i++){
    if (i % x == 0) myArray.push(i)
  }
  return myArray
}
console.log(countBy(2,5));
