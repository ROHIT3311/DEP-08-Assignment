function MaxSumSubArray(arr, k) {
  let l = 0;
  let r = k - 1;
  let n = arr.length;
  let sum = 0;
  let maxSum = 0;

  for (let i = l; i <= r; i++) {
    sum += arr[i];
  }

  while (r < n - 1) {
    sum -= arr[l];
    l++;
    r++;
    sum += arr[r];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

function maxSumSubArrayWithSum(arr, k) {
  let l = 0;
  let r = 0;
  let sum = 0;
  let maxLen = 0;
  let indices = [];

  while (r < arr.length) {
    sum += arr[r];
    if (sum > k) {
      sum -= arr[l];
      l++;
    }

    if (sum <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }

  return maxLen;
}

function maxCardPickupSum(arr, k) {
  let maxSum = 0;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < k; i++) {
    leftSum += arr[i];
  }

  maxSum = leftSum;

  let righIdx = arr.length - 1;
  for (let i = k - 1; i >= 0; i--) {
    leftSum -= arr[i];
    rightSum += arr[righIdx];
    righIdx--;
    maxSum = Math.max(maxSum, leftSum + rightSum);
  }

  return maxSum;
}

function longestSubstringWithoutRepeat(str) {
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    let currStr = "";
    let currSet = new Set();
    for (let j = i; j < str.length; j++) {
      if (!currSet.has(str.charAt(j))) {
        currSet.add(str.charAt(j));
        currStr += str.charAt(j);
      }
      maxLength = Math.max(maxLength, currSet.size);
    }
  }

  return maxLength;
}
// Below optimized function of above function
function optimizedLongestSubstringWithoutRepeat(str) {
  let l = 0;
  let r = 0;
  let maxLen = 0;
  let h1 = new Map();

  while (r < str.length) {
    if (h1.has(str.charAt(r)) && h1.get(str.charAt(r)) >= l) {
      l = h1.get(str.charAt(r)) + 1;
    }

    h1.set(str.charAt(r), r);
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  console.log(maxLen);

  return maxLen;
}

let arr = [6, 2, 3, 4, 7, 2, 1, 7, 1];
let k = 4;
// console.log(MaxSumSubArray(arr, k));
// console.log(maxSumSubArrayWithSum(arr, 26));
// console.log(maxCardPickupSum(arr, k));

let str = "cabdzabcd";
// console.log(longestSubstringWithoutRepeat(str));
console.log(optimizedLongestSubstringWithoutRepeat(str));
