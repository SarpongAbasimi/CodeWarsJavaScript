package algos

import scala.annotation.tailrec

final case class UserInput(value: List[Int])

object SumFunction {
  def calculate(userInput: UserInput): Int = {
    @tailrec
    def add(data: List[Int], accumulator: Int): Int = {
      data match {
        case head :: tail => add(tail, accumulator+ head)
        case Nil => accumulator
      }
    }
    add(userInput.value, 0)
  }
}
