//You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.Your task is to return an array which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.
var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'ope', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];

//Access the continent
//If contitnet is the required
//return True
function allContinents(list) {
  let myArray= []
  let answer=list.forEach((element)=>myArray.push(element.continent));
  console.log(myArray);
  return myArray.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania')
}

console.log(allContinents(list1))
