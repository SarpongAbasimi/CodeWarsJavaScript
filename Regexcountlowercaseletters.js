function lowercaseCount(str){
  if(str== ""){
    return 0
  }
  return str.match(/[a-z]/g)?str.match(/[a-z]/g).length : 0;
}

console.log(lowercaseCount('ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~'));
