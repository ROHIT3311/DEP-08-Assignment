function sumOfNumber(arr, index = 0) {
  if (arr.length == index) {
    return arr[0];
  }
  return arr[index] + sumOfNumber(arr, index + 1);
}

console.log(sumOfNumber([1, 2, 3, 4, -5])); // Output: 55
