function mergeSort(arr, si, ei) {
  if (si >= ei) {
    return;
  }

  let mid = Math.floor(si + (ei - si) / 2);
  mergeSort(arr, si, mid);
  mergeSort(arr, mid + 1, ei);

  merge(arr, si, mid, ei);
}

function merge(arr, si, mid, ei) {
  let temp = [];
  let i = si; //left
  let j = mid + 1; //right

  while (i <= mid && j <= ei) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
  }
  while (i <= mid) {
    temp.push(arr[i++]);
  }

  while (j <= ei) {
    temp.push(arr[j++]);
  }

  for (let k = 0; k < temp.length; k++) {
    arr[si + k] = temp[k];
  }
}

let arr = [5, 1, 2, 6];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
