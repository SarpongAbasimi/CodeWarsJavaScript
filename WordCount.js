
    function countWords(str) {
        return (str.match(/[^\s]+/g) || []).length;
      }
   

console.log(countWords(("Dear   Victoria, I love  to press   space button.")));