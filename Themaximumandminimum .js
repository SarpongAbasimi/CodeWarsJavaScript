let arr1 = [3,10,5]
let arr2 = [20,7,15,8]
let o=[1,2,3,4,5]
let p=[6,7,8,9,10]

//Method One has a bug can you fix it ?
function maxAndMin(arr1,arr2){
  let newArray= []
  const first=(Math.max(...arr2)-Math.min(...arr1));
  for(let i = 0 ;i <arr2.length;i++){
    let subs=(Math.max(...arr1)-arr2[i]);
    if(subs >= 0){
      newArray.push(subs);
    }
  }
  return[first , Math.min(...newArray)]

}

//This method works and passed the test
function maxAndMin(arr1,arr2){
let newArray = []
let newArray2 = []
for(let i = 0 ; i < arr2.length;i++){
  for(let j= 0; j < arr1.length; j++){
    newArray.push(Math.abs(arr1[j] - arr2[i]));
  }
}
for(let i = 0 ; i < arr1.length;i++){
  for(let j= 0; j < arr2.length; j++){
    newArray2.push(Math.abs(arr2[j] - arr1[i]));
  }
}
return[Math.max(...newArray),Math.min(...newArray)]
}
console.log(maxAndMin(o,p));
