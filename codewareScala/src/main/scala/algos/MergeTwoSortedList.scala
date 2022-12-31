package algos

import MergeTwoSortedList._

//List(1,5,3) List(4,7,6)

case class MergeTwoSortedList (firstList: List[Int], secondList: List[Int]){

  def calculate: List[Int] = {
    def compute(input: List[Int]): List[Int] = {
      if(input.isEmpty){
        List.empty[Int]
      } else if(getLength(input) == 2) {
        if(input(0) > input(1)){
          List(input(1), input(0))
        } else {
          input
        }
      } else {
        val midPointIndex =  Math.round(getLength(input)/ 2)
        val midPointValue = input(midPointIndex)
        val greaterThanMidPointValue = greaterThanMid(midPointValue, input)
        val lowerThanMidPointValue = lowerThanMid(midPointValue, input)

        compute(lowerThanMidPointValue) ++ List(midPointValue) ++ compute(greaterThanMidPointValue)
      }
    }
    compute(firstList ++ secondList)
  }
}

object MergeTwoSortedList {
  private def getLength(input: List[Int]): Int = {
    input.length
  }

  private def greaterThanMid(midPointValue: Int, inputList: List[Int]): List[Int] = {
    inputList.filter(_ > midPointValue)
  }

  private def lowerThanMid(midPointValue: Int, inputList: List[Int]): List[Int] = {
    inputList.filter(_ < midPointValue)
  }
}
