//Basic Math (Add or Subtract)
//In this kata, you will do addition and subtraction on a given string. The return value must be a 'string'.
//Example: calculate('1plus2plus3minus4') should return '2'.
function subadd(input){
//replace minus and plus with respective signs
//eval
let changeSigns = (input.replace(/plus/g,"+").replace(/minus/g,"-"))
return (eval(changeSigns)).toString()
}
console.log(subadd('1minus2minus3minus4'))
