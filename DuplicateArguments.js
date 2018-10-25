//let a =('a','b','c','a');
//This Methodhas a bug
function solution(...input) {
  let dict = {}
  let newArray=[]
  const amount =input.reduce((acc,cur)=>{
    if(cur in acc){
      acc[cur]++
      newArray.push(acc[cur])
    }
    else{
      acc[cur]=1
    }
    return acc
  },dict);
  return newArray[0] >= 2?true :false;
}


//Best Method
function solution() {
  for(let i= 0; i < arguments.length; i++) {
   for(let j = i + 1 ; j < arguments.length; j++)
     if( arguments[i] === arguments[j]) {
      return true;
     }
  }
  return false;
}
