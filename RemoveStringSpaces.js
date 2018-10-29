

//Remove String Spaces
function noSpace(x){
  //Return undefined if x is an empty String
  //if not return all alpha numeric characters and join them
  if(x== ""){
    return undefined
  }
  return x.match(/[A-Za-z0-9]/ig).join("")

}

console.log(noSpace('afadfadf fadfadfa'))
