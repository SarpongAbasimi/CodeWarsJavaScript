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
