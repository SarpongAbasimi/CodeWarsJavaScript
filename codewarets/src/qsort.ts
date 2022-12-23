const qsort = (inputValue: number[]): Array<number> => {
  const inputDataSize = inputValue.length;

  if (inputDataSize == 0 || inputDataSize == 1) {
    return inputValue;
  }

  const sort = (inputArray: number[]): number[] => {
    let lowElementArray: number[] = [];
    let higherElementArray: number[] = [];

    const inputArrayLength = inputArray.length;
    const midPoint = Math.floor(inputArrayLength / 2);

    let pivot = inputArray[midPoint];

    if (inputArrayLength == 0 || inputArrayLength == 1) {
      return inputArray;
    } else if (inputArrayLength == 2) {
      if (inputArray[midPoint] > inputArray[0]) {
        return inputArray;
      } else return [inputArray[midPoint], inputArray[0]];
    } else {
      for (let counter = 0; counter < inputArrayLength; counter++) {
        if (inputArray[counter] < pivot) {
          lowElementArray.push(inputArray[counter]);
        } else if (inputArray[counter] != pivot) {
          higherElementArray.push(inputArray[counter]);
        }
      }

      return [
        ...sort(lowElementArray),
        ...[pivot],
        ...sort(higherElementArray),
      ];
    }
  };

  return sort(inputValue);
};

console.log(qsort([990, 11, 2, 30, 800, 200, 30]));
