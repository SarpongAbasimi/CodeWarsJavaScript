package algos

import scala.annotation.tailrec

object CountItemsInList {
  def calculate(data: List[Int]): Int = {
    @tailrec
    def sum(input: List[Int], acc: Int): Int =  input match {
      case ::(_, next) => sum(next, acc + 1)
      case Nil => acc
    }
    sum(data, 0)
  }
}
