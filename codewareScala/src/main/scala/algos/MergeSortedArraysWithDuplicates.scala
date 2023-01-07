package algos

case object MergeSortedArraysWithDuplicates {
  def merge(nums1: Array[Int], m: Int, nums2: Array[Int], n: Int): Array[Int] = {
    val getRightArrayElementsOne = getNElementFromArray(nums1, m)
    val getRightArrayElementsTwo = getNElementFromArray(nums2, n)
    (getRightArrayElementsOne ++ getRightArrayElementsTwo).sorted
  }



  def mergeTwo(nums1: Array[Int], m: Int, nums2: Array[Int], n: Int): Array[Int] = {
    val getRightArrayElementsOne = getNElementFromArray(nums1, m)
    val getRightArrayElementsTwo = getNElementFromArray(nums2, n)

    val addArraysTogether = getRightArrayElementsOne ++ getRightArrayElementsTwo

    def calculate(input: Array[Int], arraySize: Int): Array[Int] = {
      if(arraySize == 2 && input(arraySize - 1)  < input(arraySize - 2)){
        Array(input(arraySize - 1), input(arraySize - 2))
      } else if(arraySize == 2 && input(arraySize - 1)  > input(arraySize - 2)) {
        input
      } else if(arraySize == 0){
        input
      }
      else {

        val medPoint = input(Math.round(arraySize / 2))

        val duplicates = input.filter(_ == medPoint)

        val elementsGreaterThanMid = input.filter(_ > medPoint )
        val elementLessThanMid = input.filter(_ < medPoint)

        calculate(elementLessThanMid, elementLessThanMid.length) ++ duplicates  ++ calculate(elementsGreaterThanMid, elementsGreaterThanMid.length)
      }
    }

    calculate(addArraysTogether, addArraysTogether.length)
  }

  def getNElementFromArray(input: Array[Int], number: Int): Array[Int] = {
    input.slice(0, number)
  }
}
