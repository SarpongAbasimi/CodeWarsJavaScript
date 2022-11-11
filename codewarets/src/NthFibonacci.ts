// I love Fibonacci numbers in general, 
// but I must admit I love some more than others.
// I would like for you to write me a 
// function that when given a number (n) 
// returns the n-th number in the Fibonacci Sequence.
// For example:

// To do
// Kata - https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

let cache: {[key: number]: number} = {
    0 : 0,
    1: 1,
    2: 1
}

function nthFibo(n: number): number {

    if(n == 0){
        return 0
    }

    if(n == 1 || n == 2) {
        return 1
    }

    if(cache.hasOwnProperty(n)){
        return cache[n]
    } else {
        let result = nthFibo(n - 1) + nthFibo(n - 2)
        cache[n] = result
        return result
    }
}



