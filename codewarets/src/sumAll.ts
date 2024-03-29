type InputArray = number[];

const sumElementsInArray = (input: InputArray): number => {
  const add = (processedArray: number[], accumulation: number): number => {
    if (processedArray.length == 0) {
      return accumulation;
    } else {
      let head = processedArray.splice(0, 1);
      return add(processedArray, accumulation + head[0]);
    }
  };
  return add(input, 0);
};

console.log(sumElementsInArray([1, 2, 3, 4, 5]));
