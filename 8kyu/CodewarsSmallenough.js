let myname= "My name is sarpose tutu Abasimi"
let count = /[aeiou]/ig;
let p=myname.match(count);



function getCount(str) {
  var vowelsCount = str.match(/[aeiou]/ig);
  return vowelsCount ? vowelsCount.length : 0;
  // enter your majic here


}

console.log(getCount("My name is sarpose tutu Abasimi"));
