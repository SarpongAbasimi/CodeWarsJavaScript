/*
You probably know the "like"
system from Facebook and other pages.
People can "like" blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] ->
String, which must take in input array,
containing the names of people who like an item.
It must return the display text as shown in the examples:

*/

let mylikes=[]

function likes(input){

  let inputLength = input.length
  if(inputLength===1){
    return`${input[0]} likes this`;
  }
  else if (inputLength === 2) {
    return `${input[0]} and ${input[1]} like this`;
  }
  else if (input.length === 3) {
   return `${input[0]},${input[1]} and ${input[2]} like this`;
  }
  else if (inputLength > 3) {
   return `${input[0]},${input[1]} and ${input.length-2} others like this`;
 }
 else{
   return "no one likes this";
 }
}

console.log(likes(mylikes))
