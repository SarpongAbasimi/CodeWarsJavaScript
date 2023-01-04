package algos


case class LengthOfLastWords(input: String){
  def lengthOfLastWords = {
    input.trim.split(" ").last.length
  }
}
