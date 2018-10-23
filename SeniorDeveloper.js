//You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.Your task is to return an array which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

function name(input){

  let answer = input.reduce((acc,cur)=> acc[0]&&acc[0].age>cur.age?acc:acc[0] && acc[0].age==cur.age?[...acc,cur]:[cur],[]);
  return answer;
}
console.log(name(list1))


//Method2
const findSenior = (list) => {
let arr = [];
let correctArr = [];
list.forEach(val => {
arr.push(val.age);
});
let highest = Math.max(...arr);
for (let i = 0; i < list.length; i++) {
if (list[i].age == highest){
correctArr.push(list[i]);
}
}
return correctArr;
}
