import algos.{ClimbStairs}
object Main {
  def main(args: Array[String]): Unit = {
    val request = ClimbStairs(100)
    val result = request.calculate
    println(result)
  }
}
