/*
Is it a vowel on this position?
Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.
*/

function checkVowel(string, position) {
  let split=string.toLowerCase().split('');
  const vowel= ["a","e","i","o","u"];
  return vowel.includes(split[position]) ? true :false;
};
