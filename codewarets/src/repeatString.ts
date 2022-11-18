export function repeatStr(n: number, s: string): string {
  let stringArray: Array<string> = [];
  for (let i: number = 0; i < n; i++) {
    stringArray.push(s);
  }
  return stringArray.join("");
}

export function repeatStrTwo(n: number, s: string): string {
  let stringArray: Array<string> = new Array(n).fill(s);
  return stringArray.join("");
}

export function repeatStrThree(n: number, s: string): string {
  return s.repeat(n);
}

let result = repeatStr(3, "Hello");
console.log(result);
