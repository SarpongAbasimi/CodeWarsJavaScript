//Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];



function lan (input){
  let answer = input.reduce((all,item,idex)=>{
    all[item["firstName"]]
    return all
  },{});
  return answer
}


console.log(lan(list1));
