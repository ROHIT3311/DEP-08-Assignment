function printPatternButterfly(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    for (let j = 1; j <= 2 * (n - i); j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    for (let j = 1; j <= 2 * (n - i); j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

function printpattern(row) {
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= row - i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

function invertedPyramid(row) {
  for (let i = row; i >= 1; i--) {
    for (let j = 1; j <= row - i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

function printPatternX(row) {
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    for (let j = 1; j <= row * (row - i); j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }

  for (let i = row; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    for (let j = 1; j <= row * (row - i); j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

// printPatternButterfly(4);
// printpattern(4);
// invertedPyramid(5);
printPatternX(4);
