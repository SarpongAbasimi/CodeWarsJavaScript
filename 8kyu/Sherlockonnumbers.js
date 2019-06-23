/*
Sherlock has to find suspect on his latest case. He will use your method, dear Watson. The suspect in this case is a number which is most unique in given set, e.g.:
has least (minimum) occurences in set
and no other number has the same occurences count
Write method which helps Sherlock to find suspect from given set of numbers. If no suspect is found the method should return nil.
*/

function find_suspect(...input){
  for(let i=0;i<input.length;i++){
    if(input.indexOf(input[i])===(input.lastIndexOf(input[i]))){
      return (input[i])
    }
  }
}

console.log(find_suspect(1, 2, 3, 4, 2, 2, 1, 4, 4));
