import algos.{ Cal}
object Main {
  def main(args: Array[String]): Unit = {
    val result = Cal.isPalindrome[String]("civic")

    println(result)
  }
}
