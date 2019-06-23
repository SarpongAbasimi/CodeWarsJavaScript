//Find the unique number
/*
here is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/
let niq=([ ]);

function findUniq(niq){
  for(let i in niq){
    if(niq.indexOf(niq[i])===niq.lastIndexOf(niq[i])){
      return niq[i];
    }
  }
}
console.log(findUniq(niq))
