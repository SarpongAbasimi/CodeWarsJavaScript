//Coding Meetup #12 - Higher-Order Functions Series - Find GitHub 
var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];
// map the list
//filter through the list and return coditions set
function findAdmin(list, lang) {
  let map=list.map((element)=>element).filter((element)=>element.language ==lang && element.githubAdmin == "yes");
  return map
}

console.log(findAdmin(list1,"JavaScript"))
