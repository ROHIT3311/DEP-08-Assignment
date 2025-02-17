function powerToX(x, n) {
  if (n == 1) {
    return x;
  }

  return x * powerToX(x, n - 1);
}

console.log(powerToX(2, 5));

function optimizedPower(x, n) {
  if (n == 0) {
    return 1;
  }

  let half =
    optimizedPower(x, Math.floor(n / 2)) * optimizedPower(x, Math.floor(n / 2));
  if (n % 2 != 0) {
    half = x * half;
  }

  return half;
}

console.log(optimizedPower(2, 5));
