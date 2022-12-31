import algos.MergeTwoSortedList
object Main {
  def main(args: Array[String]): Unit = {
    val listOne = List(1,3, 2)
    val listTwo = List(1,9, 9, 40)

    Array(1,3).distinct
    val result = MergeTwoSortedList(listOne, listTwo).calculate
    println(result)
  }
}