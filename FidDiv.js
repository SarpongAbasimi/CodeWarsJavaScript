function getDivisorsCnt(n){
  const myArray=[];
  let count = 1;
  while(count < (n+1)){
    myArray.push(count);
    count++;
  }
  return (myArray.filter((value)=>n % value == 0)).length
}

console.log(getDivisorsCnt(10))
