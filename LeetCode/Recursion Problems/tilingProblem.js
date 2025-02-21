function tiling(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  let total = tiling(n - 1) + tiling(n - 2);

  return total;
}

console.log(tiling(4));
