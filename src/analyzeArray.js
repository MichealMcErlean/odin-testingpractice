export function analyzeArray(arr) {
  let average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
  arr.sort((a,b) => a-b);
  let min = arr[0];
  let max = arr[arr.length - 1];
  let length = arr.length;
  return { average, min, max, length };
}