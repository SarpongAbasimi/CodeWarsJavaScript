/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
*/


function anagrams(word, words) {
    var myArray = new Array();
    let splitSortOriginalWord= word.split("").sort((a,b)=>a>b).join("");
    for(let i = 0; i < words.length ;i++){
        if(splitSortOriginalWord == (words[i].split('').sort((a,b)=>a>b).join('')) ){
            myArray.push(words[i]);
        }
    }
    return myArray.length >= 1 ? myArray : [];
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
