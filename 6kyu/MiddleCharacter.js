//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
  let array=[];
  let strLength=s.length;
  if(strLength%2=== 0){
    let division=strLength/2
  array.push(s[division-1],s[division]);
  }else {
    let floor = Math.floor(strLength/2);
    array.push(s[floor]);
  }
  return (array.join(""));
}
