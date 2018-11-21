//Solved Using regular functions
let input = 'hello I AM DONALD'
function is_uppercase(input){
  return input.split('').every((ele)=> ele === ele.toUpperCase())
}

console.log(is_uppercase(input));

//SOLVED USING  A CLASS
class Checking{
  constructor(input){
    this.input=input;
  }
  is_uppercase(){
   return this.input.split('').every((ele)=> ele === ele.toUpperCase())
  }
}

var c = new Checking('C')
console.log(c.is_uppercase())


//Prototype
String.prototype.isUpperCase  = function(_str){
  return this.split("").every(function(c){return c === c.toUpperCase();});
}
