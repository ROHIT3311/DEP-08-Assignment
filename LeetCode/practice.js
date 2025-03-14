// let str = "0332331";

// // Split the string into pairs of two
// let arr = [];
// let lastDigit = ""; // To store the last unpaired digit

// for (let i = 0; i < str.length; i += 2) {
//   if (i + 1 < str.length) {
//     arr.push(str[i] + str[i + 1]); // Form pairs of two
//   } else {
//     lastDigit = str[i]; // Store the last single digit if it exists
//   }
// }

// // Sort the array
// arr.sort();

// // Replace the second-to-last element with the first element
// if (arr.length > 1) {
//   arr[arr.length - 2] = arr[0];
// }

// // Join the array into a string
// let newStr = arr.join("");

// // Append the last unpaired digit if it exists
// if (lastDigit) {
//   newStr += lastDigit;
// }

// console.log(newStr);

// let str = "0332331";

// // Split the string into pairs of two and store the last unpaired digit if any
// let arr = str.match(/.{1,2}/g) || []; // Regex to split into chunks of 1 or 2 characters
// let lastDigit = arr[arr.length - 1].length === 1 ? arr.pop() : "";

// // Sort the array
// arr.sort();

// // Replace the second-to-last element with the first element (if there are at least two elements)
// if (arr.length > 1) {
//   arr[arr.length - 2] = arr[0];
// }

// // Join the array into a string and append the last unpaired digit (if it exists)
// let newStr = arr.join("") + lastDigit;

// console.log(newStr);

// let str = "pwwkew";

// let max = 0;
// let count = 1;
// for (let i = 0; i < str.length - 1; i++) {
//   if (str.charCodeAt(i + 1) - str.charCodeAt(i) == 1) {
//     count++;
//     console.log("count in if : ", count);
//   } else {
//     console.log("count in else : ", count);
//     count = 1;
//   }
//   max = Math.max(max, count);
// }
// console.log(max);

// let arr = [1, 5, 4, 2, 9, 9, 9];
// let k = 3;

// // Remove duplicates and sort the array in descending order
// let unique = [...new Set(arr)];

// let maxSum = 0;
// for (let i = 0; i <= unique.length - k; i++) {
//   let currentSum = 0;
//   for (let j = i; j < i + k; j++) {
//     currentSum += unique[j];
//   }
//   maxSum = Math.max(maxSum, currentSum);
// }

// console.log("Maximum sum of subarray of size", k, ":", maxSum);

function printMaxProduct(arr) {
  let maxProduct = 0;
  let maxNumber = 0;
  let count = 0;

  let r = 0;

  while (r < arr.length) {
    if (arr[r] == 0) {
      maxProduct = Math.max(maxProduct, count * maxNumber);
      maxNumber = 0;
      count = 0;
    } else {
      count++;
      maxNumber = Math.max(maxNumber, arr[r]);
    }
    r++;
  }

  maxProduct = Math.max(maxProduct, maxNumber * count);

  return maxProduct;
}

function maxArr(arr) {
  let count = 0,
    max = 0,
    ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      ans = Math.max(ans, count * max);
      count = 0;
      max = 0;
    } else {
      count++;
      max = Math.max(max, nums[i]);
    }
  }

  ans = Math.max(ans, count * max); // Ensure the last subarray is considered
  return ans;
}

let arr = [0, 1, 2, 3, 0, 4, 5, 6, 0, 10, 20];
console.log(printMaxProduct(arr));
