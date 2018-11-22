//Code news refractoring which i am gonana do later
/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"

*/

const input='Just kidding there is still one more'
function spinWords(input){

const split = input.split(' ');
const x =Array.from(split)

let newArray= []
  for(let i in split){
    if(split[i].length > 4){
    newArray.push(split[i].split('').reverse().join(''))
    }
  }
  for(let i=0;i < x.length;i++){
    for(let z =0 ; z < newArray.length;z++){
      if(x[i].split('').reverse().join('')== newArray[z]){
        x[i]=newArray[z]
      }
    }
  }
  return x.join(' ')
}

console.log(spinWords(input));



//Best SOLUTUION
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
