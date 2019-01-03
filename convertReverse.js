
//Convert number to reversed array of digits
//eg - 348597 => [7,9,5,8,4,3]

function digitize(n) {
  let newArray=[];
  (n.toString().split('').reverse().forEach(function(x){
    newArray.push(parseInt(x))
  }));
  return newArray
}
