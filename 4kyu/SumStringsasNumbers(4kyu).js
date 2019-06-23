function sumStrings(num1, num2){
  while (num1.length > 1 && num1[0] === '0')
    num1 = num1.slice(1);

  while (num2.length > 1 && num2[0] === '0')
    num2 = num2.slice(1);
  
  num1 = num1.split('').reverse().join('');
  num2 = num2.split('').reverse().join('');
  
  var add = 0
    , ans = '';
  for (var i = 0, len = num1.length > num2.length ? num1.length : num2.length; i < len; i++) {
    var a = i < num1.length ? Number(num1[i]) : 0
      , b = i < num2.length ? Number(num2[i]) : 0;
      
    var c = a + b + add;
    ans += c % 10;
    add = c >= 10 ? 1 : 0;
  }

  if (add) ans += add;

  return ans.split('').reverse().join('');
}


//Second solutuion does not pass all test !! can You fix it


function sumStrings(a,b) { 


    var c = arguments
    console.log(c)
    let {0:first , 1 :second} = c 

    first = parseInt(first)
    second = parseInt(second)

    if(first && second){
        return((first +second).toString())
    }
    else if(first && !second){
        return first.toString()
    }
    else if(second && !first){
        return second.toString()
    }

}
