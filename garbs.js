
//Get the arguments
//Get element at index 0
//Match elements in the array
//return match
//Note solution does not pass one of the Kata unit test
function grabscrab(input){
    let getUserInput=(Array.from(arguments));
    let stringToDect =((getUserInput[0]));
    let match=new RegExp(`(^[${stringToDect}]+$)`);
    const matchInput = getUserInput[1].filter(arryElements=>arryElements.match(match));
    return matchInput;
  }
  
  //console.log(grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] ));
  
  const reverseSeq = n => {
    let count=0
    let array=[]
    while (n>count){
      n-count
      count++
      array.push(count);
    }
    return array.sort((a,b)=>b-a);
  };
  

  const reverseSeq = n => {
    console.log( [...Array(n)].map((_,i)=>n-i))
  };
  
