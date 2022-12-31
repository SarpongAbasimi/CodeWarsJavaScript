package algos

import scala.annotation.tailrec

object TwoSsum {
  def calculate(nums: Array[Int], target: Int): Array[Int] = {
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
}