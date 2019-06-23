function order(words){
  if (words == '')return '';
  let match =words.match(/\d/g)
  const sortMatch =match.sort((a,b)=>a-b);
  let split =words.split(' ')
  for(let i = 0 ; i < split.length;i++){
    for(let j =0; j <sortMatch.length;j++){
      if(split[i].includes(sortMatch[j])){
        sortMatch[j]=split[i]
      }
    }
  }
  return sortMatch.toString().replace(/,/g,' ');
}

console.log(order("is2 Thi1s T4est 3a"))
