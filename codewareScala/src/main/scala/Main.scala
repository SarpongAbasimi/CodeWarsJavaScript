import algos.PlusOne
object Main {
  def main(args: Array[String]): Unit = {
    val request = PlusOne(Array(9,8,7,6,5,4,3,2,1,9))
    val result = request.plusOne
    println(result.toList)
  }
}
