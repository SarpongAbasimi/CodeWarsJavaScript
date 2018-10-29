//Spacify
//Modify the spacify function so that it returns the given string with spaces between each letter.
//In this exercise, you can assume that only strings will be passed to your function.
let input="hello world"
function spacify(str) {
  return str.split("").join(" ");
}


console.log(spacify(input))
