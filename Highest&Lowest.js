//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
let split = numbers.split(" ");
let myArray=[Math.max(...split),Math.min(...split)]
return myArray.join(" ");
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
