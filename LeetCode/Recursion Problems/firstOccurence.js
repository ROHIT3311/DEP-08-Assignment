function firstOccurance(arr, i, key) {
  if (i == arr.length) {
    return -1;
  }

  if (arr[i] == key) {
    return i;
  }

  return firstOccurance(arr, i + 1, key);
}

console.log(firstOccurance([2, 2, 3, 4, 5, 4], 0, 10));
