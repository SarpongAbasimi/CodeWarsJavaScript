//validate code with simple regex
/*
Basic regex tasks. Write a function that takes in a numeric code of any length.
The function should check if the c
ode begins with 1, 2, or 3 and return true if so. Return false otherwise.
*/

let input= 423
function validateCode (code) {
return code.toString().match(/^[1-3]/)? true :false;
}

console.log(validateCode(input))
