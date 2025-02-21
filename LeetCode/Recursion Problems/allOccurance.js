function allOccurance(arr, newArr, i, key) {
  if (i == arr.length) {
    console.log(newArr);
    return;
  }

  if (arr[i] == key) {
    newArr.push(i);
  }

  allOccurance(arr, newArr, i + 1, key);
}

allOccurance([1, 2, 3, 2, 2], [], 0, 2);
