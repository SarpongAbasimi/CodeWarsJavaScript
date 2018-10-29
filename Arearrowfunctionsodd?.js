//Are arrow functions odd?
function odds(values){
  // arrow it
  return values.filter(element =>element%2===1 );
}

console.log(odds([4,6,8]))
