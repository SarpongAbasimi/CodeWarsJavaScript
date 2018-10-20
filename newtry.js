var myString={};

function counting(string){
  for(let i=0;i<string.length;i++){
    if(myString.hasOwnProperty(string[i])==true){
      myString[string[i]]+=1;
    }
    else {
      myString[string[i]]=1;
    }
  }
  return myString;
}

console.log(counting("Sarpong"));
