import algos. CountItemsInList
object Main {
  def main(args: Array[String]): Unit = {
    val data = Array.range(0,10).view.toList
    val result = CountItemsInList.calculate(data)
    println(result)
  }
}
