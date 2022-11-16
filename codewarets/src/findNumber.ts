// We have an array of data
// devide the data into half
// check if the data is greater than or less than the provided value
// if greater than, get the other half and try again

const findNumber: (inputArray: number[], valueToSearch: number) => number 
= (inputArrayValue, searchNumber) => {

    let max = inputArrayValue.length
    let low =   0

    function innerFunc(array: number[], serachValue:number, start: number, inputSize: number): number{
        if(array.length == 0){
            return - 1
        } else {
            let midPoint: number = Math.floor((start + inputSize)/ 2)
    
            if(array[midPoint] == serachValue){
                return array[midPoint]
            } else if (midPoint < serachValue){
                low = midPoint + 1
                return innerFunc(array, searchNumber, low, inputSize)
            } else {
                return innerFunc(array, searchNumber, low - 1, max)
            }
        }
    }
    
    return innerFunc(inputArrayValue, searchNumber, low, max)
}


let res: number = findNumber([1,2,3,4,5,6,7,8,9,10], 4)

console.log(res)



