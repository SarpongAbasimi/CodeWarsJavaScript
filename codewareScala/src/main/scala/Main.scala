import algos.PlusOne
object Main {
  def main(args: Array[String]): Unit = {
    val request = PlusOne(Array(3,4,8,19))
    val result = request.plusOne
    println(result.toList)
  }
}