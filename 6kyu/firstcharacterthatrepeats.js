
//first character that repeats
//This Methodhas a bug can You solve it ?
function repeat(input){
  let newArray =[]
  let split=input.split("")
  let reduce = split.reduce((acc,cur)=>{
    if(cur in acc){
      acc[cur]++
      newArray.push(cur)
    }
    else{
      acc[cur]=1
    }
    return acc
  },{});
  return newArray[0]
}
console.log(repeat(""))


//Method2
function getFirstDuplicate(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]))
      return arr[i];
  }
}

var arrWithNumbers = [2, 5, 5, 2, 3, 5, 1, 2, 4];
console.log(getFirstDuplicate(arrWithNumbers))

var numbers = [1, 3, 6, 7, 5, 7, 6, 6, 4, 9, 10, 2, 11]
console.log(getFirstDuplicate(numbers))
