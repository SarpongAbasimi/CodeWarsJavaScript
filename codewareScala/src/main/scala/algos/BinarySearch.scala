package algos

import scala.annotation.tailrec

case class BinarySearch(searchValue: Int, searchList: Array[Int]){
  def search: Int = {
    val arraySize = searchList.length
    @tailrec
    def searchHelper(lowerBound: Int, higherBound: Int): Int = {
      if(higherBound == 0) {
        - 1
      } else if (arraySize == 1){
        if(searchList(arraySize - 1) == searchValue){
          arraySize - 1
        } else {
          - 1
        }
      } else {
        val guess = Math.floor((lowerBound + higherBound) / 2).toInt

        if(guess == searchValue) {
          guess
        } else if (guess < searchValue) {
          var newLowPoint = guess + 1
          searchHelper(newLowPoint, higherBound)
        } else  {
          var newHighPoint = guess - 1
          searchHelper(lowerBound, newHighPoint)
        }
      }
    }
    searchHelper(0, arraySize)
  }
}
