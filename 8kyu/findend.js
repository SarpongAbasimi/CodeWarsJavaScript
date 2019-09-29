function confirmEnding(str, target) {
  const joinWord = str.split().join(''),
  lengthOfTarget = target.length,
  ending = joinWord.slice(-(lengthOfTarget));
  return(target == ending)
  }