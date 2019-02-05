//First non-repeating character


function firstNonRepeatingLetter(s) {
    var toLower = s.toLowerCase()
    for(let i = 0 ; i < s.length ; i++){
        if(toLower .indexOf(toLower [i]) == toLower.lastIndexOf(toLower [i]) ){
          return (toLower.indexOf(toLower [i]) == s.indexOf(toLower [i])) ? toLower[i]:toLower[i].toUpperCase()
          //return(toLower [i])
        }
    }
    return "";
  }
console.log(firstNonRepeatingLetter('sTreSS'))


Test.describe('Simple Tests', function() {
  it('should handle simple tests', function() {
    Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
    Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
    Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
  });
});
