function fact(n) {
  if (Math.abs(n) == 0) {
    return 1;
  }

  let fact_1 = Math.abs(n) * fact(Math.abs(n) - 1);
  return fact_1;
}

console.log(fact(-5));
