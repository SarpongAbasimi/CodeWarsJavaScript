let obj = new Object()
obj.name="sg"
obj.color="space"


//var obj={name:"dog",legs:4,color:"white"}


function animal(obj){
  let string=`This ${obj.color} ${obj.name} has ${obj.legs} legs`;
  return string
}

console.log(animal(obj));
