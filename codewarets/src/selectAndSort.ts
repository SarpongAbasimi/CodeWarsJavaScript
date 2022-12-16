const sortNumbers = (input: Array<number>): number[] => {
  const runSort = (dataSet: number[]): number[] => {
    if (dataSet.length == 0 || dataSet.length == 1) {
      return dataSet;
    }

    for (let counter = 0; counter < dataSet.length; counter++) {
      for (let countertwo = 0; countertwo < dataSet.length; countertwo++) {
        if (dataSet[counter] < dataSet[countertwo]) {
          [dataSet[counter], dataSet[countertwo]] = [
            dataSet[countertwo],
            dataSet[counter],
          ];
        }
      }
    }
    return dataSet;
  };
  return runSort(input);
};

let arrayOfNumber = [0, 6, 5, 9, 7, 5, 2, 3, 1, 4, 9, 9, 9, 50, 2.1, 4, 9];
console.log(sortNumbers(arrayOfNumber));
