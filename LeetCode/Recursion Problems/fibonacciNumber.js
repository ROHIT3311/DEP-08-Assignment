function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  
  let f_2 = fibonacci(n - 1) + fibonacci(n - 2);

  return f_2;
}

console.log(fibonacci(10));
