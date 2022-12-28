package algos

import scala.annotation.tailrec

object Cal {
  def twoSum(nums: Array[Int], target: Int): Array[Int] = {
    val startingIndex = 0
    @tailrec
    def runComputation(inputData: Array[Int], targetResult: Int, index: Int): Array[Int] = {
      val currentIndexValue =  inputData(index)
      val restOfArray = inputData.tail
      val remainder = targetResult - currentIndexValue

      if(restOfArray.contains(remainder)){
        Array(nums.indexOf(remainder), nums.lastIndexOf(inputData(index)))
      } else {
        val newIndex = index
        runComputation(restOfArray, targetResult, newIndex)
      }
    }

    runComputation(nums, target, startingIndex)
  }


  def isPalindrome(x: Int): Boolean = {
    val splitInput = x.toString.split("")
    val lowerBound = 0
    val upperBound = splitInput.length - 1
    def check(inputArray: Array[String], lowerBound: Int, upperBound: Int): Boolean = {
      if(inputArray.length == 2){
        inputArray(lowerBound) == inputArray(upperBound)
      } else {
        if( inputArray(lowerBound) == inputArray(upperBound)){
          val midPoint = Math.round(inputArray.length / 2)
          if(lowerBound == midPoint || upperBound == midPoint){
            true
          } else {
            check(inputArray, lowerBound + 1, upperBound - 1)
          }
        } else  {
          false
        }
      }
    }
    check(splitInput, lowerBound, upperBound)
  }
}