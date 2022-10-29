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

    // ['(','[', '{', '}', ']',')']
    // "(){}[]" 

    let splittedInputValue = braces.split('')
    const splittedInputValueLength = splittedInputValue.length
    let finalResult: boolean[] = []

    for(let counter: number = 0; counter < splittedInputValueLength; counter++){

        let currentIndexValuePair = bracesAndPairs[`${splittedInputValue[counter]}`].pair

        let nextValue = counter % 2 == 0 ? splittedInputValue[counter + 1] : splittedInputValue[counter - 1]
   
        console.log(`${splittedInputValue[counter]} pair is ${currentIndexValuePair} index is ${counter} and nextInArray is ${nextValue}`)
    
        if(currentIndexValuePair == splittedInputValue[splittedInputValueLength - (counter + 1)] || currentIndexValuePair == nextValue) {
            finalResult.push(true)
        } else {
            finalResult.push(false)
        }
    }
    return !finalResult.includes(false)
}

console.log(validBraces("(){}[]"))
// console.log(validBraces("(){}[] ([{}])"))