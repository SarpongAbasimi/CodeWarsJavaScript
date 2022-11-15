const findNumber: (inputArray: number[], valueToSearch: number) => number 
= (a,b) => {
    if(a.length == 0){
        return -1
    }

    if(a.length == 1){
        return a[0] == b ? b : -1
    } else {        
        let fullLenghtOfArray = a.length
        let midPointOfArray = (fullLenghtOfArray) / 2

        if(midPointOfArray > b){
            a.splice(Math.round(midPointOfArray))
            return findNumber(a, b)
        } else {
            a.splice(0, Math.round(midPointOfArray))
            return findNumber(a, b)
        }
    }
}


let res: number = findNumber([1,2,3,4,5,6,7,8,9,10], 4)

console.log(res)



