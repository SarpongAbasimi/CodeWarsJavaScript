
let romanNum={
  I:"1",
  V:"5",
  X:"10",
  L:"50",
  C:"100",
  D:"500",
  M:"1000"
}

var romanToInt = function(roman) {
    
function solution(roman)
{
  var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  var numbers = roman.split('');
  var sum = 0, i;

  for(i = 0; i < numbers.length; i++)
  {
    if(data[numbers[i]] < data[numbers[i+1]])
    {
      sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    }
    else
    {
      sum += data[numbers[i]];
    }
  }
  
  return sum;
}
    return solution(roman);
    
};
