/*The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }What if the string is empty ? Then the result should be empty object literal { }*/

function counting(string){
  var myString={};
  for(let i=0;i<string.length;i++){
    if(myString.hasOwnProperty(string[i])==true){
      myString[string[i]]+=1;
    }else {
      myString[string[i]]=1;
    }
  }
  return myString;
}
console.log(counting(""));
