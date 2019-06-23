


function longestRepetition(s) {
  let findMatch= s.match(/(.)\1+/g)
  const array=[]
  for(let i in findMatch){
    array.push(findMatch[i].length)
  }
  return [findMatch.find((ele)=>ele.length===Math.max(...array))[0],Math.max(...array)]

  //return [find[0],Math.max(...array)]
}

console.log(longestRepetition("bbbaaabaaaa"));
