package algos

case class IsPalindrome[T] (input: T) {
  def calculate: Boolean = {
    val splitInput = input.toString.split("")
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
