var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

/*function askForMissingDetails(list) {
  for(let i = 0;i<list.length;i++){
    for(let keys in list[i]){
      if(list[i][keys]== null){
        list[i]["question"]=`Hi, could you please provide your ${keys}.`
        return list[i]
      }

      }
    }
    return [];
  }

console.log(askForMissingDetails(list1));*/

//right
function askForMissingDetails(list) {
   // thank you for checking out the Coding Meetup kata :)
   return list.filter(function(a){
     for (let k in a)
     {
       if (!a[k])
       {
         a.question = `Hi, could you please provide your ${k}.`;
         return a;
       }
     }
   })}
