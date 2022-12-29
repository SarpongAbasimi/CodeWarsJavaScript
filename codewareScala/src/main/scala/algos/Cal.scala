package algos

import scala.annotation.tailrec
import scala.collection.mutable.Stack

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


  def isPalindrome[T](x: T ): Boolean = {
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

  // Wrong for odd number of string
  def isValid(s: String)= {
    val data = s.split("").toList
    val counter = 0
    val mapping:Map[String, String] = Map(
      ")" ->"(",
      "]" -> "[",
      "}" -> "{"
    )
    def compute(inputData: List[String], tracker: Int, openParen: List[String]): List[String] = {
      if(tracker == (inputData.length)) {
        openParen
      } else {
        if(Array("(", "[", "{").contains(inputData(tracker))){
          val newList = inputData(tracker) :: openParen
          compute(inputData, tracker + 1, newList)
        } else if(openParen.isEmpty) {
          inputData
        } else {
          if(openParen.head == mapping(inputData(tracker))){
            compute(inputData, tracker + 1, openParen.tail)
          } else {
           inputData
          }
        }
      }
    }
    if(compute(data, counter, List.empty[String]).isEmpty) true else false
  }
}