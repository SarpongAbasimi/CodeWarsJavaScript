function name(arr){
let value=0;
let newArray=[];
for(let i = 0 ; i< arr.length ;i++){
  if(arr[i]===0){
    newArray.push(arr[i]);
  }
}

let filter=arr.filter((arr)=> arr !== value);
for(let j= 0; j<newArray.length;j++){
  filter.push(newArray[j]);
}
return filter;
}


console.log(name([false,1,0,1,2,0,1,3,"a"]));
