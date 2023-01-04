package algos

case class PlusOne (digits: Array[Int]){
  def plusOne: Array[Int] = {
    val digitSize = digits.length - 1

    def compute(input: Array[Int], index: Int): Array[Int] ={
      if(index < 0){
        input
      } else {
        if(input(index) < 9){
          compute(input, index - 1)
        } else {
          compute(input, index - 1)
        }

      }
    }

    compute(digits, digitSize)
  }
}
