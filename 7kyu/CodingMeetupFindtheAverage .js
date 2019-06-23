/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Given the following input array:

*/
var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

var list2 = [
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
];

function mylist (input){
  const listLength = input.length;
  const totalAge =input.reduce((acc,cur)=>{
    return(acc + cur.age);
  },0);
  return (Math.round(totalAge/listLength))
}

//mETHOD2
function getAverageAge(list) {
  return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);
}
