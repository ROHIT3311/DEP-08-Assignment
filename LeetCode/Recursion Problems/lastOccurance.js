function lastOccurance(arr, i, key) {
  if (i == arr.length) {
    return -1;
  }

  let isFound = lastOccurance(arr, i + 1, key);
  if (isFound == -1 && arr[i] == key) {
    return i;
  }

  return isFound;
}

console.log(lastOccurance([2, 2, 3, 4, 5, 4], 0, 4));
