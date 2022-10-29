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


export function validBraces(braces: string): boolean {
    //Option ONe
    // Put the string in an array
    // check if the if the current index if equals the last index
    // "([{}])"
    let myBraceTracker: {
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

    let splittedBraces = braces.replace(' ', '').split('')
    const splittedBracesLength = splittedBraces.length
    let finalResult: boolean[] = []

    for(let counter: number = 0; counter < splittedBracesLength; counter++){

        let elementPair = myBraceTracker[`${splittedBraces[counter]}`].pair

    
        let nextInArray = counter % 2 == 0 ? splittedBraces[counter + 1] : splittedBraces[counter - 1]
   

        console.log(`${splittedBraces[counter]} pair is ${elementPair} index is ${counter} and nextInArray is ${nextInArray}`)
    
        if(elementPair == splittedBraces[splittedBracesLength - (counter + 1)] || elementPair == nextInArray) {
            finalResult.push(true)
        } else {
            finalResult.push(false)
        }
    }
    return !finalResult.includes(false)
}

// ({})[({})]

console.log(validBraces("(){}[]"))