//rightCode
const oddCount = n => Math.floor(n / 2)


//Final Code has a bug
let input=15
function oddCount(x){
 return [...Array(x).keys()].filter((elem)=> elem%2==1).length;

}

console.log(oddCount(input))

//Initial Code
/*
function oddCount(n){
  let array=[]
  let count =0
  while (count < (n-1)){
    array.push((n-1)-count);
    count++
  }
const len= array.filter((elements)=>elements%2==1);
return (len.length);
}
*/
