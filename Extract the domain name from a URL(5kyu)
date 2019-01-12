// It took me about 4 hours to solve to Kata.
// The most import thing was that I was able to solve it and by doing it the hard way , i learnt a lot.
// When solving this kata beware of the random test becasue the url to not have the same patterns as the sample test.

/*
Details - Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
  let mySplit = url.split('.')
  if(!(mySplit[0].match(/^[htpp(?=s)]+/))){
    return mySplit[0] !=='www' ? mySplit[0] :mySplit[1];
  }
  else{
    return mySplit[0]==('https://www') || mySplit[0]==('http://www') ? mySplit[1]:mySplit[0].split(mySplit[0].match(/(\/\/)+/ig))[1];
  }
}

/**********************************************************************************************************************************/
//Other solutions by Developers


function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

//
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
