//Largest pair sum in array
let vals=[-10, -8, -16, -18, -19];
function cal(sum){
  let sort= numbers.sort((a,b)=>a-b)
  let highest=sort[(sort.length-1)]
  let sHighest=sort[(sort.length)-2]
  return (highest+sHighest);
}

console.log(cal(vals))
