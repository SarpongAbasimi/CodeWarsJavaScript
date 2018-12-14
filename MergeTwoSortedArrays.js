function mergeArrays(arr1, arr2) {
let allArrayElement=[...arr1,...arr2];

const myNumbers= allArrayElement.reduce((acc,cur)=> {

if (acc.includes(cur)){

}else {
  acc.push(cur)
}
return acc
},[]);
return myNumbers.sort((a,b)=>a-b);
}

console.log(mergeArrays([1,1,2,3,4], [5,6,7,8]))
