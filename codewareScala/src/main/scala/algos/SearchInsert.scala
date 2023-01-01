package algos

import scala.annotation.tailrec


final case class SearchInsert (input: Array[Int], target: Int) {
  def find:Int = {
    @tailrec
    def compute(inputData: Array[Int], target:Int, lowerBound: Int, upperBound: Int): Int = {
      if(inputData.isEmpty){
        -1
      } else {
        val midPointIndex = Math.floor((lowerBound + upperBound) / 2).toInt
        val midPointValue = inputData(midPointIndex)

        if(midPointValue == target){
          midPointIndex
        } else {
          if (midPointValue > target){
            if(midPointIndex != 0 && target > inputData(midPointIndex - 1)) {
              midPointIndex
            } else if(midPointIndex == 0 && (target - midPointValue ) < 1) {
              midPointIndex
            }
            else compute(inputData, target, lowerBound, midPointIndex - 1)
          } else {
            compute(inputData, target, midPointIndex + 1, upperBound)
          }
        }
      }
    }
    if( target > input(input.length - 1)){
      val newArray = input :+ target
      compute(newArray, target, 0, newArray.length)
    } else {
      compute(input, target, 0, input.length)
    }
  }
}
