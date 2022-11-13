// Write a function that takes a string of braces, 
// and determines if the order of the braces is valid. 
// It should return true if the string is valid, 
// and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, 
// but introduces new characters: brackets [], 
// and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, 
// and will only consist of parentheses, 
// brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid 
// if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// Kata - https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/typescript


export function validBraces(braces: string): boolean {
    let bracesAndPairs: {
        [key: string]: {
            pair: string
        }
    } = {
        '(': {
            pair: ')'
        },
        '[': {
            pair: ']'
        },
        '{': {
            pair: '}'
        },
        '}': {
            pair: '{'
        },
        ']': {
            pair: '['
        },
        ')': {
            pair: '('
        }
    }
    
    return !braces.split(' ').flatMap((value, _)=> {
        let result = []
        let splittedValue = value.split('')
        for(let i = 0; i < splittedValue.length; i++){
            let currentIndexValuePair = bracesAndPairs[`${splittedValue[i]}`].pair
            let nextValue = i % 2 == 0 ? splittedValue[i + 1] : splittedValue[i - 1]
            if(currentIndexValuePair == splittedValue[splittedValue.length - (i + 1)] || currentIndexValuePair == nextValue) {
                result.push(true)
            } else {
                result.push(false)
            }
        }
        return result
    }).includes(false)
}

// console.log(validBraces("(({{[[]]}}))"))
// console.log(validBraces(")(}{]["))
// console.log(validBraces("[(])"))
// console.log(validBraces("(){}[] ([{}])"))