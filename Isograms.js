/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that
determines whether a string that contains only letters
is an isogram. Assume the empty string is an isogram. Ignore letter case.*/

let input=( "moOse" )

function isIsogram(x){
let split=x.toLowerCase().split("");
for(let i = 0; i<split.length ;i++){
  if(split.indexOf(split[i]) != split.lastIndexOf(split[i])){
    return false
  }
}
return true
}

console.log(isIsogram(input))
