package algos

case class ClimbStairs (value: Int){
  def calculate:Int = {
    var container: Map[Int, Int] = Map.empty[Int, Int]

    def compute(input: Int):Int = {
      if( container.get(input).isDefined){
        container(input)
      } else {
        if (input < 3){
          input
        } else {
          val res = compute(input - 1) + compute(input - 2)
          container += (input -> value)
          res
        }
      }
    }
    compute(value)
  }
}
