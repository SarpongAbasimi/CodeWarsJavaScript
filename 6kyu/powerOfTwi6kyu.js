
  function digital_root(n) {
    if (n < 10) return n ;
    //convert n to string and split it
    while (n > 10) {
      let split = n.toString().split('');
      const reduce = split.reduce((acc,cur)=> parseInt(acc)+parseInt(cur));
      if (reduce < 10){
        return reduce;
        break;
      }
      else
      {
        let splitReduce= reduce.toString().split('');
        const newReduce = splitReduce.reduce((acc,cur)=> parseInt(acc)+parseInt(cur));
        return newReduce;
      }
    }
  }

//better solutuion
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
