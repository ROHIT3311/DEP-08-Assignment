function isSorted(arr, i) {
  if (i == arr.length - 1) {
    return true;
  }

  if (arr[i] > arr[i + 1]) {
    return false;
  }

  return isSorted(arr, i + 1);
}

console.log(isSorted([1, 2, 2, 4], 0));
