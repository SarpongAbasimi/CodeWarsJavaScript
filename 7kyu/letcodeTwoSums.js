
var twoSum = function(nums, target) {
    let alreadyPassedNumbers = [];
    for(let i = 0; i < nums.length; i++){
      let currentNumberInNmsArray = nums[i],

      resultOfTargetMinusCurrentIndexValue = target - currentNumberInNmsArray;



      if(alreadyPassedNumbers.includes(resultOfTargetMinusCurrentIndexValue)){
        let indexOfFirst = nums.indexOf(resultOfTargetMinusCurrentIndexValue)
        return([indexOfFirst, i]);

      }else {
        alreadyPassedNumbers.push(currentNumberInNmsArray);

      }
    }
};

const nums = [3,3], target = 6

console.log(twoSum(nums, target))