/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

.*/

function DNAStrand(dna){
  var myobject= {
    "A":"T",
    "C":"G",
    "T":"A",
    "G":"C"
  };
  let myArray=[]
  for(let i =0 ;i<dna.length;i++){
    myArray.push(myobject[dna[i]]);
  }
  return myArray.join("");
}

//console.log(DNAStrand("ATTGC"));


//OtherSolutions . in regex
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

//Using Replace in Regex
function DNAStrand(dna){
  return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}

console.log(NAStrand("AAAA"));
