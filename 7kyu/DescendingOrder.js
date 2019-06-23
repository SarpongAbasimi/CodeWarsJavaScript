//Your task is to make a function that
//can take any non-negative integer as a argument and
//return it with its digits in descending order. Essentially,
//rearrange the digits to create the highest possible number.

let input =(123456789)

function descendingOrder(n){
  let convertTostring = n.toString().split("").sort((a,b)=>b-a).join("");
  return parseInt(convertTostring)
}

console.log(descendingOrder(input));
