/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.*/
function DNAStrand(dna){
  var myobject= {
    "A":"T",
    "C":"G",
    "T":"A",
    "G":"C"
  };
  let myArray=[]
  for(let i =0 ;i<dna.length;i++){
    //console.log(i,dna[i]);
    myArray.push(myobject[dna[i]]);
  }
  return myArray.join("");
}

console.log(DNAStrand("ATTGC"));
