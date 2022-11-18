const findNumber: (inputArray: number[], valueToSearch: number) => number = (
  inputArrayValue,
  searchNumber
) => {
  let max = inputArrayValue.length;
  let low = 0;

  function innerFunc(
    array: number[],
    serachValue: number,
    start: number,
    inputSize: number
  ): number {
    console.log(
      `Array ${array}, search ${searchNumber}, start ${start}, input ${inputSize}`
    );
    if (array.length == 0 || searchNumber > array.length) {
      return -1;
    } else {
      let guess: number = Math.floor((start + inputSize) / 2) - 1;
      if (array[guess] == serachValue) {
        return array[guess];
      } else if (guess < serachValue) {
        low = guess + 2;
        return innerFunc(array, searchNumber, low, inputSize);
      } else {
        return innerFunc(array, searchNumber, low, guess);
      }
    }
  }
  return innerFunc(inputArrayValue, searchNumber, low, max);
};

let res: number = findNumber(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  14
);
console.log(res);
