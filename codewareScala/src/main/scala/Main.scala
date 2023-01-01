import algos.{SearchInsert}
object Main {
  def main(args: Array[String]): Unit = {
    val search = SearchInsert(Array(3,4,8,19), 6)
    val result = search.find
    println(result)
  }
}