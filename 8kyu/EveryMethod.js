/*var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];*/

var list1 = [{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},
{"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":42,"language":"JavaScript"},
{"firstName":"Sou","lastName":"B.","country":"Japan","continent":"Asia","age":43,"language":"Python"},
{"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"Java"}]






function sameLan(list){
  let myArray=[]
  for(let i = 0 ; i<list.length;i++){
  myArray.push(list[i].language);
  }
  const language=myArray.every((element)=>element == "JavaScript");
  return language;
}

console.log(sameLan(list1));
