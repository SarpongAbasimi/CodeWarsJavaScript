function squareSum(numbers){
  return numbers.reduce((acc,cur)=> acc + Math.pow(cur,2) ,0)
}


console.log(squareSum([0,3,4,5]))
