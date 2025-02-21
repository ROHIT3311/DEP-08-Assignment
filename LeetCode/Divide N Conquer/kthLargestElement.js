function kthLargestElement(arr, k) {
  console.log(arr);
  arr.sort();
  console.log(arr[arr.length - k]);
}

kthLargestElement([3, 2, 4, 1], 2);
