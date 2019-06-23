let input=('Hello world')

function pig_it(userInput){


  //get all alphabetical elements
  let alpha=userInput.match(/[a-z]+/ig)
  //get all non alpah elements
  const nonAlpha=userInput.match(/\s\W/ig)
  //create an empty array
  let newArray= []
  //loop through the alpahabetical elements
  //slice the first element of the array char
  //Place the slice char at the back and add ay
  //lastly push eveverything into the newArray
  for(let char in alpha){
    newArray.push((alpha[char].slice(1).concat(alpha[char][0],'ay')));
  }
  //if there is an alpahabetical element attach it to the  newArray
  //if not return new array as it is
  return nonAlpha ?(newArray.join(' ')+ nonAlpha.join('')) :(newArray.join(' '));
}


console.log(pig_it(input))
