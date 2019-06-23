//Jaden Casing Strings
String.prototype.toJadenCase = function () {
  let newArray = []
  let split = this.split(" ")
  for (let i =0 ;i<split.length;i++){
  newArray.push(split[i][0].toUpperCase() + split[i].slice(1));
  }
  return newArray.join(" ")
};
