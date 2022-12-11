import algos.BinarySearch
object Main {
  def main(args: Array[String]): Unit = {
    val arrayElements = Array.range(1,1000)
    val search = BinarySearch(500, arrayElements).search
    println(search)
  }
}
