package algos

import scala.annotation.tailrec

final case class IsValid (input: String){
  def check: Boolean = {
    val data = input.split("").toList
    val counter = 0
    val mapping:Map[String, String] = Map(
      ")" ->"(",
      "]" -> "[",
      "}" -> "{"
    )
    @tailrec
    def compute(inputData: List[String], tracker: Int, openParen: List[String]): List[String] = {
      if(tracker == (inputData.length)) {
        openParen
      } else {
        if(Array("(", "[", "{").contains(inputData(tracker))){
          val newList = inputData(tracker) :: openParen
          compute(inputData, tracker + 1, newList)
        } else if(openParen.isEmpty) {
          inputData
        } else {
          if(openParen.head == mapping(inputData(tracker))){
            compute(inputData, tracker + 1, openParen.tail)
          } else {
            inputData
          }
        }
      }
    }
    if(compute(data, counter, List.empty[String]).isEmpty) true else false
  }
}
