// Given an array of integers of any length, 
// return an array that 
// has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]


function upArray(input: number[]): number[] | null {
    let getInputLength: number = input.length
    let lastElement = input[getInputLength - 1]
    
    if(getInputLength == 0 || input.some((value, _)=> value < 0 || value >= 10)){
        return null
    }

    if (lastElement < 9) {
        input.splice(getInputLength - 1, 1, lastElement + 1)
    } else {
        for(let counter = (getInputLength - 1); counter >= 0; counter--) {
            if(input[counter] == 9 && input[counter - 1] < 9){
                input.splice(counter - 1, 2, input[counter - 1] + 1,  0)
                return input
            } else {
                if(input[counter - 1] == 9){
                    input.splice(counter, 1, 0)
                } else {
                    input.splice(counter, 1, 1, 0)
                }
            }
        }
    }
    return input
}

let result = upArray([1,10])
