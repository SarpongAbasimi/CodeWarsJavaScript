//Simple validation of a username with regex

let input ="el33333333 333333"
function validateUsr(username) {
  let matchUpper= (/[A-Z]|\s/g);
  let testing= matchUpper.test(username);
  return ( testing ||username.length < 4 || username.length > 16) ? false : true;
  if( testing ||username.length < 4 || username.length > 16){
    return false
  }
  return true
}

console.log(validateUsr('asd43 34'))
