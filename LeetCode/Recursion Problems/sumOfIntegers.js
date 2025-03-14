function sum(n) {
  if (n == 1) {
    return 1;
  }

  let sum_1 = n + sum(n - 1);
  return sum_1;
}

console.log(sum(5));
