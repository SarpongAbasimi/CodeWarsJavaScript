/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

*/

function parse(input){
  const split=input.split('');
  let count= 0
  let myArray=[]
  for(let i = 0; i<split.length;i++){
    switch(split[i]){
      case 'i':
        count++;
      break;
      case 'd':
        count--;
      break;
      case 's':
        count=Math.pow(count,2)
      break;
      case 'o':
        myArray.push(count);
      break ;
    }
  }
  return myArray;
}
console.log(parse("iiisdoso") )


//Method TWo

function parse(input){
  const split=input.split('');
  let count= 0
  let myArray=[]
  for(let i = 0; i<split.length;i++){
    if(split[i]=="i") count++;
    if(split[i]=='d') count--;
    if(split[i]=='s') count=Math.pow(count,2);
    if(split[i]=='o') myArray.push(count);
  }
  return myArray
}
console.log(parse("iiisdoso") )
