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

console.log(oddCount(15)) //=> 3, i.e [1, 3, 5]
