function stringToNumber(str, newStr, i) {
  let numsArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eigth",
    "nine",
  ];
  if (i == str.length) {
    console.log(newStr);
    return;
  }

  newStr += numsArr[str.charAt(i)] + " ";
  stringToNumber(str, newStr, i + 1);
}

stringToNumber("2020", "", 0);
