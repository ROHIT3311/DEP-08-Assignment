function binaryString(n, str, lp) {
  if (n == 0) {
    console.log(str);
    return;
  }

  binaryString(n - 1, str + "0", 0);

  if (lp == 0) {
    binaryString(n - 1, str + "1", 1);
  }
}

binaryString(3, "", 0);
