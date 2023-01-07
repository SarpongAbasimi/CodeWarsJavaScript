import algos.{MergeSortedArraysWithDuplicates}
object Main {
  def main(args: Array[String]): Unit = {
    val result = MergeSortedArraysWithDuplicates.mergeTwo(Array(1), 3, Array(), 3)
    Array(1,2,3,2,5,3, 6)
    println(result.toList)
  }
}